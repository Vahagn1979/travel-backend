import multer from "multer";
import path from "path";
import { existsSync, mkdirSync } from "fs";
import { fileURLToPath} from "url";

const __filname = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filname);

const UPLOAD_DIR = path.join(__dirname, "../public/uploads");

if(!existsSync(UPLOAD_DIR)) {
    mkdirSync(UPLOAD_DIR, {recursive: true});
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOAD_DIR)
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext);    
    // cb(null, `${file.fieldname}-${Date.now()}-${Math.random()*1e9}${ext}`)
    cb(null, `${name}-${Date.now()}-${Math.trunc(Math.random()*1e9)}${ext}`)
  }
})

const upload = multer({ storage });

export {upload};
