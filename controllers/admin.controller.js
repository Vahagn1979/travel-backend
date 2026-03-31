import bcrypt from "bcrypt";
import { prisma } from "../db/prisma.js";

export const getAdminDashboard = (req, res, next) => {
    res.render("adminDashboard", {title: "Home", activeRoute: "dashboard"})
}

export const login_get = (req, res) => {
  res.render("admin/login", { title: "Login", error: null });
};

export const login_post = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.render("admin/login", {
        title: "Login",
        error: "Invalid credentials. Please enter the correct username and password for a staff account. Note that both fields may be case-sensitive.",
      });
    }

    req.session.user = { id: user.id, username: user.username };
    res.redirect("/admin");
  } catch (error) {
    next(error);
  }
};

export const logout = (req, res, next) => {
    req.session.destroy(err => {
        if(err) return next(err);
        res.clearCookie('connect.sid');
        res.redirect('/admin/login')
    })
}

export const changeAdminName_get = (req, res) => {
  res.render("admin/changeAdminName", {
    title: "Change Admin Name",
    error: null,
    success: null,
    activeRoute: ""
  })
};

export const changeAdminName_post = async (req, res, next) => {
  const {adminName} = req.body;
  const {username} = req.session.user;

  try {
    const existing = await prisma.user.findUnique({
      where: {
        username: adminName,
      },
    });

    if(existing) {
      return res.render("admin/changeAdminName", {
          title: "Change Admin Name",
          error: "Admin name already exists!",
          success: null,
          activeRoute: ""
      })
    };

    await prisma.user.update({
      where: {
        username,
      },
      data: {
        username: adminName,
      }
    });

    req.session.user.username = adminName;

    res.render("admin/changeAdminName", {
      title: "Change Admin Name",
      error: null,
      success: "Admin name was updated successfully!",
      activeRoute: ""
    })

  } catch (error) {
    next(error)
  }
}

export const changeAdminPassword_get = (req, res) => {
  res.render("admin/changeAdminPassword", {
    title: "Change Admin Password",
    error: null,
    success: null,
    activeRoute: ""
  })
}

export const changeAdminPassword_post = async (req, res, next) => {
  const { oldPassword, newPassword, confirmPassword } = req.body;
  const { username } = req.session.user;

  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      }
    });

    if(!user || !(await bcrypt.compare(oldPassword, user.password))) {
      return res.render("admin/changeAdminPassword", {
        title: "Change Admin Password",
        error: "Invalide old password!",
        success: null,
        activeRoute: ""
      })
    };

    if(newPassword !== confirmPassword) {
      return res.render("admin/changeAdminPassword", {
        title: "Change Admin Password",
        error: "New password and confirm password do not match",
        success: null,
        activeRoute: ""
      })
    };

    const passwordHash = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: {
        username
      },
      data: {
        password: passwordHash
      }
    });

    res.render("admin/changeAdminPassword", {
      title: "Change Admin Password",
      error: null,
      success: "The administrator's password has been successfully updated!",
      activeRoute: ""
    });
    
  } catch (error) {
    next(error);
  }

}