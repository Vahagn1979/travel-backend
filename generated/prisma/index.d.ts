
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AboutPageIntro
 * 
 */
export type AboutPageIntro = $Result.DefaultSelection<Prisma.$AboutPageIntroPayload>
/**
 * Model AboutPageTeamHeading
 * 
 */
export type AboutPageTeamHeading = $Result.DefaultSelection<Prisma.$AboutPageTeamHeadingPayload>
/**
 * Model AboutPageTeam
 * 
 */
export type AboutPageTeam = $Result.DefaultSelection<Prisma.$AboutPageTeamPayload>
/**
 * Model ContactPageContent
 * 
 */
export type ContactPageContent = $Result.DefaultSelection<Prisma.$ContactPageContentPayload>
/**
 * Model FooterLabel
 * 
 */
export type FooterLabel = $Result.DefaultSelection<Prisma.$FooterLabelPayload>
/**
 * Model HomePagePackage
 * 
 */
export type HomePagePackage = $Result.DefaultSelection<Prisma.$HomePagePackagePayload>
/**
 * Model HomePagePackagesHeading
 * 
 */
export type HomePagePackagesHeading = $Result.DefaultSelection<Prisma.$HomePagePackagesHeadingPayload>
/**
 * Model HomePageSlider
 * 
 */
export type HomePageSlider = $Result.DefaultSelection<Prisma.$HomePageSliderPayload>
/**
 * Model Language
 * 
 */
export type Language = $Result.DefaultSelection<Prisma.$LanguagePayload>
/**
 * Model Logo
 * 
 */
export type Logo = $Result.DefaultSelection<Prisma.$LogoPayload>
/**
 * Model Navbar
 * 
 */
export type Navbar = $Result.DefaultSelection<Prisma.$NavbarPayload>
/**
 * Model SocialLink
 * 
 */
export type SocialLink = $Result.DefaultSelection<Prisma.$SocialLinkPayload>
/**
 * Model User_session
 * 
 */
export type User_session = $Result.DefaultSelection<Prisma.$User_sessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AboutPageIntros
 * const aboutPageIntros = await prisma.aboutPageIntro.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AboutPageIntros
   * const aboutPageIntros = await prisma.aboutPageIntro.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.aboutPageIntro`: Exposes CRUD operations for the **AboutPageIntro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AboutPageIntros
    * const aboutPageIntros = await prisma.aboutPageIntro.findMany()
    * ```
    */
  get aboutPageIntro(): Prisma.AboutPageIntroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aboutPageTeamHeading`: Exposes CRUD operations for the **AboutPageTeamHeading** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AboutPageTeamHeadings
    * const aboutPageTeamHeadings = await prisma.aboutPageTeamHeading.findMany()
    * ```
    */
  get aboutPageTeamHeading(): Prisma.AboutPageTeamHeadingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aboutPageTeam`: Exposes CRUD operations for the **AboutPageTeam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AboutPageTeams
    * const aboutPageTeams = await prisma.aboutPageTeam.findMany()
    * ```
    */
  get aboutPageTeam(): Prisma.AboutPageTeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactPageContent`: Exposes CRUD operations for the **ContactPageContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactPageContents
    * const contactPageContents = await prisma.contactPageContent.findMany()
    * ```
    */
  get contactPageContent(): Prisma.ContactPageContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.footerLabel`: Exposes CRUD operations for the **FooterLabel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FooterLabels
    * const footerLabels = await prisma.footerLabel.findMany()
    * ```
    */
  get footerLabel(): Prisma.FooterLabelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.homePagePackage`: Exposes CRUD operations for the **HomePagePackage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomePagePackages
    * const homePagePackages = await prisma.homePagePackage.findMany()
    * ```
    */
  get homePagePackage(): Prisma.HomePagePackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.homePagePackagesHeading`: Exposes CRUD operations for the **HomePagePackagesHeading** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomePagePackagesHeadings
    * const homePagePackagesHeadings = await prisma.homePagePackagesHeading.findMany()
    * ```
    */
  get homePagePackagesHeading(): Prisma.HomePagePackagesHeadingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.homePageSlider`: Exposes CRUD operations for the **HomePageSlider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomePageSliders
    * const homePageSliders = await prisma.homePageSlider.findMany()
    * ```
    */
  get homePageSlider(): Prisma.HomePageSliderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.language`: Exposes CRUD operations for the **Language** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.language.findMany()
    * ```
    */
  get language(): Prisma.LanguageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logo`: Exposes CRUD operations for the **Logo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logos
    * const logos = await prisma.logo.findMany()
    * ```
    */
  get logo(): Prisma.LogoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.navbar`: Exposes CRUD operations for the **Navbar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Navbars
    * const navbars = await prisma.navbar.findMany()
    * ```
    */
  get navbar(): Prisma.NavbarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialLink`: Exposes CRUD operations for the **SocialLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialLinks
    * const socialLinks = await prisma.socialLink.findMany()
    * ```
    */
  get socialLink(): Prisma.SocialLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_session`: Exposes CRUD operations for the **User_session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_sessions
    * const user_sessions = await prisma.user_session.findMany()
    * ```
    */
  get user_session(): Prisma.User_sessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AboutPageIntro: 'AboutPageIntro',
    AboutPageTeamHeading: 'AboutPageTeamHeading',
    AboutPageTeam: 'AboutPageTeam',
    ContactPageContent: 'ContactPageContent',
    FooterLabel: 'FooterLabel',
    HomePagePackage: 'HomePagePackage',
    HomePagePackagesHeading: 'HomePagePackagesHeading',
    HomePageSlider: 'HomePageSlider',
    Language: 'Language',
    Logo: 'Logo',
    Navbar: 'Navbar',
    SocialLink: 'SocialLink',
    User_session: 'User_session',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "aboutPageIntro" | "aboutPageTeamHeading" | "aboutPageTeam" | "contactPageContent" | "footerLabel" | "homePagePackage" | "homePagePackagesHeading" | "homePageSlider" | "language" | "logo" | "navbar" | "socialLink" | "user_session" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AboutPageIntro: {
        payload: Prisma.$AboutPageIntroPayload<ExtArgs>
        fields: Prisma.AboutPageIntroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutPageIntroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageIntroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutPageIntroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageIntroPayload>
          }
          findFirst: {
            args: Prisma.AboutPageIntroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageIntroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutPageIntroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageIntroPayload>
          }
          findMany: {
            args: Prisma.AboutPageIntroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageIntroPayload>[]
          }
          create: {
            args: Prisma.AboutPageIntroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageIntroPayload>
          }
          createMany: {
            args: Prisma.AboutPageIntroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutPageIntroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageIntroPayload>[]
          }
          delete: {
            args: Prisma.AboutPageIntroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageIntroPayload>
          }
          update: {
            args: Prisma.AboutPageIntroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageIntroPayload>
          }
          deleteMany: {
            args: Prisma.AboutPageIntroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutPageIntroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AboutPageIntroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageIntroPayload>[]
          }
          upsert: {
            args: Prisma.AboutPageIntroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageIntroPayload>
          }
          aggregate: {
            args: Prisma.AboutPageIntroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutPageIntro>
          }
          groupBy: {
            args: Prisma.AboutPageIntroGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutPageIntroGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutPageIntroCountArgs<ExtArgs>
            result: $Utils.Optional<AboutPageIntroCountAggregateOutputType> | number
          }
        }
      }
      AboutPageTeamHeading: {
        payload: Prisma.$AboutPageTeamHeadingPayload<ExtArgs>
        fields: Prisma.AboutPageTeamHeadingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutPageTeamHeadingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageTeamHeadingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutPageTeamHeadingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageTeamHeadingPayload>
          }
          findFirst: {
            args: Prisma.AboutPageTeamHeadingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageTeamHeadingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutPageTeamHeadingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageTeamHeadingPayload>
          }
          findMany: {
            args: Prisma.AboutPageTeamHeadingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageTeamHeadingPayload>[]
          }
          create: {
            args: Prisma.AboutPageTeamHeadingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageTeamHeadingPayload>
          }
          createMany: {
            args: Prisma.AboutPageTeamHeadingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutPageTeamHeadingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageTeamHeadingPayload>[]
          }
          delete: {
            args: Prisma.AboutPageTeamHeadingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageTeamHeadingPayload>
          }
          update: {
            args: Prisma.AboutPageTeamHeadingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageTeamHeadingPayload>
          }
          deleteMany: {
            args: Prisma.AboutPageTeamHeadingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutPageTeamHeadingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AboutPageTeamHeadingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageTeamHeadingPayload>[]
          }
          upsert: {
            args: Prisma.AboutPageTeamHeadingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageTeamHeadingPayload>
          }
          aggregate: {
            args: Prisma.AboutPageTeamHeadingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutPageTeamHeading>
          }
          groupBy: {
            args: Prisma.AboutPageTeamHeadingGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutPageTeamHeadingGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutPageTeamHeadingCountArgs<ExtArgs>
            result: $Utils.Optional<AboutPageTeamHeadingCountAggregateOutputType> | number
          }
        }
      }
      AboutPageTeam: {
        payload: Prisma.$AboutPageTeamPayload<ExtArgs>
        fields: Prisma.AboutPageTeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutPageTeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageTeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutPageTeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageTeamPayload>
          }
          findFirst: {
            args: Prisma.AboutPageTeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageTeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutPageTeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageTeamPayload>
          }
          findMany: {
            args: Prisma.AboutPageTeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageTeamPayload>[]
          }
          create: {
            args: Prisma.AboutPageTeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageTeamPayload>
          }
          createMany: {
            args: Prisma.AboutPageTeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutPageTeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageTeamPayload>[]
          }
          delete: {
            args: Prisma.AboutPageTeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageTeamPayload>
          }
          update: {
            args: Prisma.AboutPageTeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageTeamPayload>
          }
          deleteMany: {
            args: Prisma.AboutPageTeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutPageTeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AboutPageTeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageTeamPayload>[]
          }
          upsert: {
            args: Prisma.AboutPageTeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPageTeamPayload>
          }
          aggregate: {
            args: Prisma.AboutPageTeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutPageTeam>
          }
          groupBy: {
            args: Prisma.AboutPageTeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutPageTeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutPageTeamCountArgs<ExtArgs>
            result: $Utils.Optional<AboutPageTeamCountAggregateOutputType> | number
          }
        }
      }
      ContactPageContent: {
        payload: Prisma.$ContactPageContentPayload<ExtArgs>
        fields: Prisma.ContactPageContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactPageContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPageContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactPageContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPageContentPayload>
          }
          findFirst: {
            args: Prisma.ContactPageContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPageContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactPageContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPageContentPayload>
          }
          findMany: {
            args: Prisma.ContactPageContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPageContentPayload>[]
          }
          create: {
            args: Prisma.ContactPageContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPageContentPayload>
          }
          createMany: {
            args: Prisma.ContactPageContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactPageContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPageContentPayload>[]
          }
          delete: {
            args: Prisma.ContactPageContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPageContentPayload>
          }
          update: {
            args: Prisma.ContactPageContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPageContentPayload>
          }
          deleteMany: {
            args: Prisma.ContactPageContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactPageContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactPageContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPageContentPayload>[]
          }
          upsert: {
            args: Prisma.ContactPageContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPageContentPayload>
          }
          aggregate: {
            args: Prisma.ContactPageContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactPageContent>
          }
          groupBy: {
            args: Prisma.ContactPageContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactPageContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactPageContentCountArgs<ExtArgs>
            result: $Utils.Optional<ContactPageContentCountAggregateOutputType> | number
          }
        }
      }
      FooterLabel: {
        payload: Prisma.$FooterLabelPayload<ExtArgs>
        fields: Prisma.FooterLabelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FooterLabelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterLabelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FooterLabelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterLabelPayload>
          }
          findFirst: {
            args: Prisma.FooterLabelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterLabelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FooterLabelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterLabelPayload>
          }
          findMany: {
            args: Prisma.FooterLabelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterLabelPayload>[]
          }
          create: {
            args: Prisma.FooterLabelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterLabelPayload>
          }
          createMany: {
            args: Prisma.FooterLabelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FooterLabelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterLabelPayload>[]
          }
          delete: {
            args: Prisma.FooterLabelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterLabelPayload>
          }
          update: {
            args: Prisma.FooterLabelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterLabelPayload>
          }
          deleteMany: {
            args: Prisma.FooterLabelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FooterLabelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FooterLabelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterLabelPayload>[]
          }
          upsert: {
            args: Prisma.FooterLabelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterLabelPayload>
          }
          aggregate: {
            args: Prisma.FooterLabelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFooterLabel>
          }
          groupBy: {
            args: Prisma.FooterLabelGroupByArgs<ExtArgs>
            result: $Utils.Optional<FooterLabelGroupByOutputType>[]
          }
          count: {
            args: Prisma.FooterLabelCountArgs<ExtArgs>
            result: $Utils.Optional<FooterLabelCountAggregateOutputType> | number
          }
        }
      }
      HomePagePackage: {
        payload: Prisma.$HomePagePackagePayload<ExtArgs>
        fields: Prisma.HomePagePackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HomePagePackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePagePackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HomePagePackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePagePackagePayload>
          }
          findFirst: {
            args: Prisma.HomePagePackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePagePackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HomePagePackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePagePackagePayload>
          }
          findMany: {
            args: Prisma.HomePagePackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePagePackagePayload>[]
          }
          create: {
            args: Prisma.HomePagePackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePagePackagePayload>
          }
          createMany: {
            args: Prisma.HomePagePackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HomePagePackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePagePackagePayload>[]
          }
          delete: {
            args: Prisma.HomePagePackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePagePackagePayload>
          }
          update: {
            args: Prisma.HomePagePackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePagePackagePayload>
          }
          deleteMany: {
            args: Prisma.HomePagePackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HomePagePackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HomePagePackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePagePackagePayload>[]
          }
          upsert: {
            args: Prisma.HomePagePackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePagePackagePayload>
          }
          aggregate: {
            args: Prisma.HomePagePackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHomePagePackage>
          }
          groupBy: {
            args: Prisma.HomePagePackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<HomePagePackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.HomePagePackageCountArgs<ExtArgs>
            result: $Utils.Optional<HomePagePackageCountAggregateOutputType> | number
          }
        }
      }
      HomePagePackagesHeading: {
        payload: Prisma.$HomePagePackagesHeadingPayload<ExtArgs>
        fields: Prisma.HomePagePackagesHeadingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HomePagePackagesHeadingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePagePackagesHeadingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HomePagePackagesHeadingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePagePackagesHeadingPayload>
          }
          findFirst: {
            args: Prisma.HomePagePackagesHeadingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePagePackagesHeadingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HomePagePackagesHeadingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePagePackagesHeadingPayload>
          }
          findMany: {
            args: Prisma.HomePagePackagesHeadingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePagePackagesHeadingPayload>[]
          }
          create: {
            args: Prisma.HomePagePackagesHeadingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePagePackagesHeadingPayload>
          }
          createMany: {
            args: Prisma.HomePagePackagesHeadingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HomePagePackagesHeadingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePagePackagesHeadingPayload>[]
          }
          delete: {
            args: Prisma.HomePagePackagesHeadingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePagePackagesHeadingPayload>
          }
          update: {
            args: Prisma.HomePagePackagesHeadingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePagePackagesHeadingPayload>
          }
          deleteMany: {
            args: Prisma.HomePagePackagesHeadingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HomePagePackagesHeadingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HomePagePackagesHeadingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePagePackagesHeadingPayload>[]
          }
          upsert: {
            args: Prisma.HomePagePackagesHeadingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePagePackagesHeadingPayload>
          }
          aggregate: {
            args: Prisma.HomePagePackagesHeadingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHomePagePackagesHeading>
          }
          groupBy: {
            args: Prisma.HomePagePackagesHeadingGroupByArgs<ExtArgs>
            result: $Utils.Optional<HomePagePackagesHeadingGroupByOutputType>[]
          }
          count: {
            args: Prisma.HomePagePackagesHeadingCountArgs<ExtArgs>
            result: $Utils.Optional<HomePagePackagesHeadingCountAggregateOutputType> | number
          }
        }
      }
      HomePageSlider: {
        payload: Prisma.$HomePageSliderPayload<ExtArgs>
        fields: Prisma.HomePageSliderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HomePageSliderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePageSliderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HomePageSliderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePageSliderPayload>
          }
          findFirst: {
            args: Prisma.HomePageSliderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePageSliderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HomePageSliderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePageSliderPayload>
          }
          findMany: {
            args: Prisma.HomePageSliderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePageSliderPayload>[]
          }
          create: {
            args: Prisma.HomePageSliderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePageSliderPayload>
          }
          createMany: {
            args: Prisma.HomePageSliderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HomePageSliderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePageSliderPayload>[]
          }
          delete: {
            args: Prisma.HomePageSliderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePageSliderPayload>
          }
          update: {
            args: Prisma.HomePageSliderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePageSliderPayload>
          }
          deleteMany: {
            args: Prisma.HomePageSliderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HomePageSliderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HomePageSliderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePageSliderPayload>[]
          }
          upsert: {
            args: Prisma.HomePageSliderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePageSliderPayload>
          }
          aggregate: {
            args: Prisma.HomePageSliderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHomePageSlider>
          }
          groupBy: {
            args: Prisma.HomePageSliderGroupByArgs<ExtArgs>
            result: $Utils.Optional<HomePageSliderGroupByOutputType>[]
          }
          count: {
            args: Prisma.HomePageSliderCountArgs<ExtArgs>
            result: $Utils.Optional<HomePageSliderCountAggregateOutputType> | number
          }
        }
      }
      Language: {
        payload: Prisma.$LanguagePayload<ExtArgs>
        fields: Prisma.LanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findFirst: {
            args: Prisma.LanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findMany: {
            args: Prisma.LanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          create: {
            args: Prisma.LanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          createMany: {
            args: Prisma.LanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          delete: {
            args: Prisma.LanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          update: {
            args: Prisma.LanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          deleteMany: {
            args: Prisma.LanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LanguageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          upsert: {
            args: Prisma.LanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          aggregate: {
            args: Prisma.LanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguage>
          }
          groupBy: {
            args: Prisma.LanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageCountAggregateOutputType> | number
          }
        }
      }
      Logo: {
        payload: Prisma.$LogoPayload<ExtArgs>
        fields: Prisma.LogoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogoPayload>
          }
          findFirst: {
            args: Prisma.LogoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogoPayload>
          }
          findMany: {
            args: Prisma.LogoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogoPayload>[]
          }
          create: {
            args: Prisma.LogoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogoPayload>
          }
          createMany: {
            args: Prisma.LogoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogoPayload>[]
          }
          delete: {
            args: Prisma.LogoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogoPayload>
          }
          update: {
            args: Prisma.LogoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogoPayload>
          }
          deleteMany: {
            args: Prisma.LogoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogoPayload>[]
          }
          upsert: {
            args: Prisma.LogoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogoPayload>
          }
          aggregate: {
            args: Prisma.LogoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogo>
          }
          groupBy: {
            args: Prisma.LogoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogoGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogoCountArgs<ExtArgs>
            result: $Utils.Optional<LogoCountAggregateOutputType> | number
          }
        }
      }
      Navbar: {
        payload: Prisma.$NavbarPayload<ExtArgs>
        fields: Prisma.NavbarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NavbarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavbarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NavbarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavbarPayload>
          }
          findFirst: {
            args: Prisma.NavbarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavbarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NavbarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavbarPayload>
          }
          findMany: {
            args: Prisma.NavbarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavbarPayload>[]
          }
          create: {
            args: Prisma.NavbarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavbarPayload>
          }
          createMany: {
            args: Prisma.NavbarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NavbarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavbarPayload>[]
          }
          delete: {
            args: Prisma.NavbarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavbarPayload>
          }
          update: {
            args: Prisma.NavbarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavbarPayload>
          }
          deleteMany: {
            args: Prisma.NavbarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NavbarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NavbarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavbarPayload>[]
          }
          upsert: {
            args: Prisma.NavbarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavbarPayload>
          }
          aggregate: {
            args: Prisma.NavbarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNavbar>
          }
          groupBy: {
            args: Prisma.NavbarGroupByArgs<ExtArgs>
            result: $Utils.Optional<NavbarGroupByOutputType>[]
          }
          count: {
            args: Prisma.NavbarCountArgs<ExtArgs>
            result: $Utils.Optional<NavbarCountAggregateOutputType> | number
          }
        }
      }
      SocialLink: {
        payload: Prisma.$SocialLinkPayload<ExtArgs>
        fields: Prisma.SocialLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          findFirst: {
            args: Prisma.SocialLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          findMany: {
            args: Prisma.SocialLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          create: {
            args: Prisma.SocialLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          createMany: {
            args: Prisma.SocialLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          delete: {
            args: Prisma.SocialLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          update: {
            args: Prisma.SocialLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          deleteMany: {
            args: Prisma.SocialLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          upsert: {
            args: Prisma.SocialLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          aggregate: {
            args: Prisma.SocialLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialLink>
          }
          groupBy: {
            args: Prisma.SocialLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialLinkCountArgs<ExtArgs>
            result: $Utils.Optional<SocialLinkCountAggregateOutputType> | number
          }
        }
      }
      User_session: {
        payload: Prisma.$User_sessionPayload<ExtArgs>
        fields: Prisma.User_sessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.User_sessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_sessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.User_sessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_sessionPayload>
          }
          findFirst: {
            args: Prisma.User_sessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_sessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.User_sessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_sessionPayload>
          }
          findMany: {
            args: Prisma.User_sessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_sessionPayload>[]
          }
          create: {
            args: Prisma.User_sessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_sessionPayload>
          }
          createMany: {
            args: Prisma.User_sessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.User_sessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_sessionPayload>[]
          }
          delete: {
            args: Prisma.User_sessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_sessionPayload>
          }
          update: {
            args: Prisma.User_sessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_sessionPayload>
          }
          deleteMany: {
            args: Prisma.User_sessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.User_sessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.User_sessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_sessionPayload>[]
          }
          upsert: {
            args: Prisma.User_sessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_sessionPayload>
          }
          aggregate: {
            args: Prisma.User_sessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_session>
          }
          groupBy: {
            args: Prisma.User_sessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_sessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.User_sessionCountArgs<ExtArgs>
            result: $Utils.Optional<User_sessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    aboutPageIntro?: AboutPageIntroOmit
    aboutPageTeamHeading?: AboutPageTeamHeadingOmit
    aboutPageTeam?: AboutPageTeamOmit
    contactPageContent?: ContactPageContentOmit
    footerLabel?: FooterLabelOmit
    homePagePackage?: HomePagePackageOmit
    homePagePackagesHeading?: HomePagePackagesHeadingOmit
    homePageSlider?: HomePageSliderOmit
    language?: LanguageOmit
    logo?: LogoOmit
    navbar?: NavbarOmit
    socialLink?: SocialLinkOmit
    user_session?: User_sessionOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FooterLabelCountOutputType
   */

  export type FooterLabelCountOutputType = {
    social_links: number
  }

  export type FooterLabelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    social_links?: boolean | FooterLabelCountOutputTypeCountSocial_linksArgs
  }

  // Custom InputTypes
  /**
   * FooterLabelCountOutputType without action
   */
  export type FooterLabelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLabelCountOutputType
     */
    select?: FooterLabelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FooterLabelCountOutputType without action
   */
  export type FooterLabelCountOutputTypeCountSocial_linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialLinkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AboutPageIntro
   */

  export type AggregateAboutPageIntro = {
    _count: AboutPageIntroCountAggregateOutputType | null
    _min: AboutPageIntroMinAggregateOutputType | null
    _max: AboutPageIntroMaxAggregateOutputType | null
  }

  export type AboutPageIntroMinAggregateOutputType = {
    id: string | null
    lang: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutPageIntroMaxAggregateOutputType = {
    id: string | null
    lang: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutPageIntroCountAggregateOutputType = {
    id: number
    lang: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AboutPageIntroMinAggregateInputType = {
    id?: true
    lang?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutPageIntroMaxAggregateInputType = {
    id?: true
    lang?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutPageIntroCountAggregateInputType = {
    id?: true
    lang?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AboutPageIntroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutPageIntro to aggregate.
     */
    where?: AboutPageIntroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutPageIntros to fetch.
     */
    orderBy?: AboutPageIntroOrderByWithRelationInput | AboutPageIntroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutPageIntroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutPageIntros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutPageIntros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AboutPageIntros
    **/
    _count?: true | AboutPageIntroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutPageIntroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutPageIntroMaxAggregateInputType
  }

  export type GetAboutPageIntroAggregateType<T extends AboutPageIntroAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutPageIntro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutPageIntro[P]>
      : GetScalarType<T[P], AggregateAboutPageIntro[P]>
  }




  export type AboutPageIntroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutPageIntroWhereInput
    orderBy?: AboutPageIntroOrderByWithAggregationInput | AboutPageIntroOrderByWithAggregationInput[]
    by: AboutPageIntroScalarFieldEnum[] | AboutPageIntroScalarFieldEnum
    having?: AboutPageIntroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutPageIntroCountAggregateInputType | true
    _min?: AboutPageIntroMinAggregateInputType
    _max?: AboutPageIntroMaxAggregateInputType
  }

  export type AboutPageIntroGroupByOutputType = {
    id: string
    lang: string
    title: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: AboutPageIntroCountAggregateOutputType | null
    _min: AboutPageIntroMinAggregateOutputType | null
    _max: AboutPageIntroMaxAggregateOutputType | null
  }

  type GetAboutPageIntroGroupByPayload<T extends AboutPageIntroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutPageIntroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutPageIntroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutPageIntroGroupByOutputType[P]>
            : GetScalarType<T[P], AboutPageIntroGroupByOutputType[P]>
        }
      >
    >


  export type AboutPageIntroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutPageIntro"]>

  export type AboutPageIntroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutPageIntro"]>

  export type AboutPageIntroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutPageIntro"]>

  export type AboutPageIntroSelectScalar = {
    id?: boolean
    lang?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AboutPageIntroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lang" | "title" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["aboutPageIntro"]>

  export type $AboutPageIntroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutPageIntro"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lang: string
      title: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aboutPageIntro"]>
    composites: {}
  }

  type AboutPageIntroGetPayload<S extends boolean | null | undefined | AboutPageIntroDefaultArgs> = $Result.GetResult<Prisma.$AboutPageIntroPayload, S>

  type AboutPageIntroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AboutPageIntroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AboutPageIntroCountAggregateInputType | true
    }

  export interface AboutPageIntroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutPageIntro'], meta: { name: 'AboutPageIntro' } }
    /**
     * Find zero or one AboutPageIntro that matches the filter.
     * @param {AboutPageIntroFindUniqueArgs} args - Arguments to find a AboutPageIntro
     * @example
     * // Get one AboutPageIntro
     * const aboutPageIntro = await prisma.aboutPageIntro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutPageIntroFindUniqueArgs>(args: SelectSubset<T, AboutPageIntroFindUniqueArgs<ExtArgs>>): Prisma__AboutPageIntroClient<$Result.GetResult<Prisma.$AboutPageIntroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AboutPageIntro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AboutPageIntroFindUniqueOrThrowArgs} args - Arguments to find a AboutPageIntro
     * @example
     * // Get one AboutPageIntro
     * const aboutPageIntro = await prisma.aboutPageIntro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutPageIntroFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutPageIntroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutPageIntroClient<$Result.GetResult<Prisma.$AboutPageIntroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AboutPageIntro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageIntroFindFirstArgs} args - Arguments to find a AboutPageIntro
     * @example
     * // Get one AboutPageIntro
     * const aboutPageIntro = await prisma.aboutPageIntro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutPageIntroFindFirstArgs>(args?: SelectSubset<T, AboutPageIntroFindFirstArgs<ExtArgs>>): Prisma__AboutPageIntroClient<$Result.GetResult<Prisma.$AboutPageIntroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AboutPageIntro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageIntroFindFirstOrThrowArgs} args - Arguments to find a AboutPageIntro
     * @example
     * // Get one AboutPageIntro
     * const aboutPageIntro = await prisma.aboutPageIntro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutPageIntroFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutPageIntroFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutPageIntroClient<$Result.GetResult<Prisma.$AboutPageIntroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AboutPageIntros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageIntroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AboutPageIntros
     * const aboutPageIntros = await prisma.aboutPageIntro.findMany()
     * 
     * // Get first 10 AboutPageIntros
     * const aboutPageIntros = await prisma.aboutPageIntro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutPageIntroWithIdOnly = await prisma.aboutPageIntro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutPageIntroFindManyArgs>(args?: SelectSubset<T, AboutPageIntroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPageIntroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AboutPageIntro.
     * @param {AboutPageIntroCreateArgs} args - Arguments to create a AboutPageIntro.
     * @example
     * // Create one AboutPageIntro
     * const AboutPageIntro = await prisma.aboutPageIntro.create({
     *   data: {
     *     // ... data to create a AboutPageIntro
     *   }
     * })
     * 
     */
    create<T extends AboutPageIntroCreateArgs>(args: SelectSubset<T, AboutPageIntroCreateArgs<ExtArgs>>): Prisma__AboutPageIntroClient<$Result.GetResult<Prisma.$AboutPageIntroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AboutPageIntros.
     * @param {AboutPageIntroCreateManyArgs} args - Arguments to create many AboutPageIntros.
     * @example
     * // Create many AboutPageIntros
     * const aboutPageIntro = await prisma.aboutPageIntro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutPageIntroCreateManyArgs>(args?: SelectSubset<T, AboutPageIntroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AboutPageIntros and returns the data saved in the database.
     * @param {AboutPageIntroCreateManyAndReturnArgs} args - Arguments to create many AboutPageIntros.
     * @example
     * // Create many AboutPageIntros
     * const aboutPageIntro = await prisma.aboutPageIntro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AboutPageIntros and only return the `id`
     * const aboutPageIntroWithIdOnly = await prisma.aboutPageIntro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutPageIntroCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutPageIntroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPageIntroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AboutPageIntro.
     * @param {AboutPageIntroDeleteArgs} args - Arguments to delete one AboutPageIntro.
     * @example
     * // Delete one AboutPageIntro
     * const AboutPageIntro = await prisma.aboutPageIntro.delete({
     *   where: {
     *     // ... filter to delete one AboutPageIntro
     *   }
     * })
     * 
     */
    delete<T extends AboutPageIntroDeleteArgs>(args: SelectSubset<T, AboutPageIntroDeleteArgs<ExtArgs>>): Prisma__AboutPageIntroClient<$Result.GetResult<Prisma.$AboutPageIntroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AboutPageIntro.
     * @param {AboutPageIntroUpdateArgs} args - Arguments to update one AboutPageIntro.
     * @example
     * // Update one AboutPageIntro
     * const aboutPageIntro = await prisma.aboutPageIntro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutPageIntroUpdateArgs>(args: SelectSubset<T, AboutPageIntroUpdateArgs<ExtArgs>>): Prisma__AboutPageIntroClient<$Result.GetResult<Prisma.$AboutPageIntroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AboutPageIntros.
     * @param {AboutPageIntroDeleteManyArgs} args - Arguments to filter AboutPageIntros to delete.
     * @example
     * // Delete a few AboutPageIntros
     * const { count } = await prisma.aboutPageIntro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutPageIntroDeleteManyArgs>(args?: SelectSubset<T, AboutPageIntroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutPageIntros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageIntroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AboutPageIntros
     * const aboutPageIntro = await prisma.aboutPageIntro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutPageIntroUpdateManyArgs>(args: SelectSubset<T, AboutPageIntroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutPageIntros and returns the data updated in the database.
     * @param {AboutPageIntroUpdateManyAndReturnArgs} args - Arguments to update many AboutPageIntros.
     * @example
     * // Update many AboutPageIntros
     * const aboutPageIntro = await prisma.aboutPageIntro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AboutPageIntros and only return the `id`
     * const aboutPageIntroWithIdOnly = await prisma.aboutPageIntro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AboutPageIntroUpdateManyAndReturnArgs>(args: SelectSubset<T, AboutPageIntroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPageIntroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AboutPageIntro.
     * @param {AboutPageIntroUpsertArgs} args - Arguments to update or create a AboutPageIntro.
     * @example
     * // Update or create a AboutPageIntro
     * const aboutPageIntro = await prisma.aboutPageIntro.upsert({
     *   create: {
     *     // ... data to create a AboutPageIntro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutPageIntro we want to update
     *   }
     * })
     */
    upsert<T extends AboutPageIntroUpsertArgs>(args: SelectSubset<T, AboutPageIntroUpsertArgs<ExtArgs>>): Prisma__AboutPageIntroClient<$Result.GetResult<Prisma.$AboutPageIntroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AboutPageIntros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageIntroCountArgs} args - Arguments to filter AboutPageIntros to count.
     * @example
     * // Count the number of AboutPageIntros
     * const count = await prisma.aboutPageIntro.count({
     *   where: {
     *     // ... the filter for the AboutPageIntros we want to count
     *   }
     * })
    **/
    count<T extends AboutPageIntroCountArgs>(
      args?: Subset<T, AboutPageIntroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutPageIntroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutPageIntro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageIntroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AboutPageIntroAggregateArgs>(args: Subset<T, AboutPageIntroAggregateArgs>): Prisma.PrismaPromise<GetAboutPageIntroAggregateType<T>>

    /**
     * Group by AboutPageIntro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageIntroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AboutPageIntroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutPageIntroGroupByArgs['orderBy'] }
        : { orderBy?: AboutPageIntroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AboutPageIntroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutPageIntroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutPageIntro model
   */
  readonly fields: AboutPageIntroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutPageIntro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutPageIntroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AboutPageIntro model
   */
  interface AboutPageIntroFieldRefs {
    readonly id: FieldRef<"AboutPageIntro", 'String'>
    readonly lang: FieldRef<"AboutPageIntro", 'String'>
    readonly title: FieldRef<"AboutPageIntro", 'String'>
    readonly description: FieldRef<"AboutPageIntro", 'String'>
    readonly createdAt: FieldRef<"AboutPageIntro", 'DateTime'>
    readonly updatedAt: FieldRef<"AboutPageIntro", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AboutPageIntro findUnique
   */
  export type AboutPageIntroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageIntro
     */
    select?: AboutPageIntroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageIntro
     */
    omit?: AboutPageIntroOmit<ExtArgs> | null
    /**
     * Filter, which AboutPageIntro to fetch.
     */
    where: AboutPageIntroWhereUniqueInput
  }

  /**
   * AboutPageIntro findUniqueOrThrow
   */
  export type AboutPageIntroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageIntro
     */
    select?: AboutPageIntroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageIntro
     */
    omit?: AboutPageIntroOmit<ExtArgs> | null
    /**
     * Filter, which AboutPageIntro to fetch.
     */
    where: AboutPageIntroWhereUniqueInput
  }

  /**
   * AboutPageIntro findFirst
   */
  export type AboutPageIntroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageIntro
     */
    select?: AboutPageIntroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageIntro
     */
    omit?: AboutPageIntroOmit<ExtArgs> | null
    /**
     * Filter, which AboutPageIntro to fetch.
     */
    where?: AboutPageIntroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutPageIntros to fetch.
     */
    orderBy?: AboutPageIntroOrderByWithRelationInput | AboutPageIntroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutPageIntros.
     */
    cursor?: AboutPageIntroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutPageIntros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutPageIntros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutPageIntros.
     */
    distinct?: AboutPageIntroScalarFieldEnum | AboutPageIntroScalarFieldEnum[]
  }

  /**
   * AboutPageIntro findFirstOrThrow
   */
  export type AboutPageIntroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageIntro
     */
    select?: AboutPageIntroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageIntro
     */
    omit?: AboutPageIntroOmit<ExtArgs> | null
    /**
     * Filter, which AboutPageIntro to fetch.
     */
    where?: AboutPageIntroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutPageIntros to fetch.
     */
    orderBy?: AboutPageIntroOrderByWithRelationInput | AboutPageIntroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutPageIntros.
     */
    cursor?: AboutPageIntroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutPageIntros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutPageIntros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutPageIntros.
     */
    distinct?: AboutPageIntroScalarFieldEnum | AboutPageIntroScalarFieldEnum[]
  }

  /**
   * AboutPageIntro findMany
   */
  export type AboutPageIntroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageIntro
     */
    select?: AboutPageIntroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageIntro
     */
    omit?: AboutPageIntroOmit<ExtArgs> | null
    /**
     * Filter, which AboutPageIntros to fetch.
     */
    where?: AboutPageIntroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutPageIntros to fetch.
     */
    orderBy?: AboutPageIntroOrderByWithRelationInput | AboutPageIntroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AboutPageIntros.
     */
    cursor?: AboutPageIntroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutPageIntros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutPageIntros.
     */
    skip?: number
    distinct?: AboutPageIntroScalarFieldEnum | AboutPageIntroScalarFieldEnum[]
  }

  /**
   * AboutPageIntro create
   */
  export type AboutPageIntroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageIntro
     */
    select?: AboutPageIntroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageIntro
     */
    omit?: AboutPageIntroOmit<ExtArgs> | null
    /**
     * The data needed to create a AboutPageIntro.
     */
    data: XOR<AboutPageIntroCreateInput, AboutPageIntroUncheckedCreateInput>
  }

  /**
   * AboutPageIntro createMany
   */
  export type AboutPageIntroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AboutPageIntros.
     */
    data: AboutPageIntroCreateManyInput | AboutPageIntroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutPageIntro createManyAndReturn
   */
  export type AboutPageIntroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageIntro
     */
    select?: AboutPageIntroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageIntro
     */
    omit?: AboutPageIntroOmit<ExtArgs> | null
    /**
     * The data used to create many AboutPageIntros.
     */
    data: AboutPageIntroCreateManyInput | AboutPageIntroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutPageIntro update
   */
  export type AboutPageIntroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageIntro
     */
    select?: AboutPageIntroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageIntro
     */
    omit?: AboutPageIntroOmit<ExtArgs> | null
    /**
     * The data needed to update a AboutPageIntro.
     */
    data: XOR<AboutPageIntroUpdateInput, AboutPageIntroUncheckedUpdateInput>
    /**
     * Choose, which AboutPageIntro to update.
     */
    where: AboutPageIntroWhereUniqueInput
  }

  /**
   * AboutPageIntro updateMany
   */
  export type AboutPageIntroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AboutPageIntros.
     */
    data: XOR<AboutPageIntroUpdateManyMutationInput, AboutPageIntroUncheckedUpdateManyInput>
    /**
     * Filter which AboutPageIntros to update
     */
    where?: AboutPageIntroWhereInput
    /**
     * Limit how many AboutPageIntros to update.
     */
    limit?: number
  }

  /**
   * AboutPageIntro updateManyAndReturn
   */
  export type AboutPageIntroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageIntro
     */
    select?: AboutPageIntroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageIntro
     */
    omit?: AboutPageIntroOmit<ExtArgs> | null
    /**
     * The data used to update AboutPageIntros.
     */
    data: XOR<AboutPageIntroUpdateManyMutationInput, AboutPageIntroUncheckedUpdateManyInput>
    /**
     * Filter which AboutPageIntros to update
     */
    where?: AboutPageIntroWhereInput
    /**
     * Limit how many AboutPageIntros to update.
     */
    limit?: number
  }

  /**
   * AboutPageIntro upsert
   */
  export type AboutPageIntroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageIntro
     */
    select?: AboutPageIntroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageIntro
     */
    omit?: AboutPageIntroOmit<ExtArgs> | null
    /**
     * The filter to search for the AboutPageIntro to update in case it exists.
     */
    where: AboutPageIntroWhereUniqueInput
    /**
     * In case the AboutPageIntro found by the `where` argument doesn't exist, create a new AboutPageIntro with this data.
     */
    create: XOR<AboutPageIntroCreateInput, AboutPageIntroUncheckedCreateInput>
    /**
     * In case the AboutPageIntro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutPageIntroUpdateInput, AboutPageIntroUncheckedUpdateInput>
  }

  /**
   * AboutPageIntro delete
   */
  export type AboutPageIntroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageIntro
     */
    select?: AboutPageIntroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageIntro
     */
    omit?: AboutPageIntroOmit<ExtArgs> | null
    /**
     * Filter which AboutPageIntro to delete.
     */
    where: AboutPageIntroWhereUniqueInput
  }

  /**
   * AboutPageIntro deleteMany
   */
  export type AboutPageIntroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutPageIntros to delete
     */
    where?: AboutPageIntroWhereInput
    /**
     * Limit how many AboutPageIntros to delete.
     */
    limit?: number
  }

  /**
   * AboutPageIntro without action
   */
  export type AboutPageIntroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageIntro
     */
    select?: AboutPageIntroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageIntro
     */
    omit?: AboutPageIntroOmit<ExtArgs> | null
  }


  /**
   * Model AboutPageTeamHeading
   */

  export type AggregateAboutPageTeamHeading = {
    _count: AboutPageTeamHeadingCountAggregateOutputType | null
    _min: AboutPageTeamHeadingMinAggregateOutputType | null
    _max: AboutPageTeamHeadingMaxAggregateOutputType | null
  }

  export type AboutPageTeamHeadingMinAggregateOutputType = {
    id: string | null
    lang: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutPageTeamHeadingMaxAggregateOutputType = {
    id: string | null
    lang: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutPageTeamHeadingCountAggregateOutputType = {
    id: number
    lang: number
    title: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AboutPageTeamHeadingMinAggregateInputType = {
    id?: true
    lang?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutPageTeamHeadingMaxAggregateInputType = {
    id?: true
    lang?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutPageTeamHeadingCountAggregateInputType = {
    id?: true
    lang?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AboutPageTeamHeadingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutPageTeamHeading to aggregate.
     */
    where?: AboutPageTeamHeadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutPageTeamHeadings to fetch.
     */
    orderBy?: AboutPageTeamHeadingOrderByWithRelationInput | AboutPageTeamHeadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutPageTeamHeadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutPageTeamHeadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutPageTeamHeadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AboutPageTeamHeadings
    **/
    _count?: true | AboutPageTeamHeadingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutPageTeamHeadingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutPageTeamHeadingMaxAggregateInputType
  }

  export type GetAboutPageTeamHeadingAggregateType<T extends AboutPageTeamHeadingAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutPageTeamHeading]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutPageTeamHeading[P]>
      : GetScalarType<T[P], AggregateAboutPageTeamHeading[P]>
  }




  export type AboutPageTeamHeadingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutPageTeamHeadingWhereInput
    orderBy?: AboutPageTeamHeadingOrderByWithAggregationInput | AboutPageTeamHeadingOrderByWithAggregationInput[]
    by: AboutPageTeamHeadingScalarFieldEnum[] | AboutPageTeamHeadingScalarFieldEnum
    having?: AboutPageTeamHeadingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutPageTeamHeadingCountAggregateInputType | true
    _min?: AboutPageTeamHeadingMinAggregateInputType
    _max?: AboutPageTeamHeadingMaxAggregateInputType
  }

  export type AboutPageTeamHeadingGroupByOutputType = {
    id: string
    lang: string
    title: string
    createdAt: Date
    updatedAt: Date
    _count: AboutPageTeamHeadingCountAggregateOutputType | null
    _min: AboutPageTeamHeadingMinAggregateOutputType | null
    _max: AboutPageTeamHeadingMaxAggregateOutputType | null
  }

  type GetAboutPageTeamHeadingGroupByPayload<T extends AboutPageTeamHeadingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutPageTeamHeadingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutPageTeamHeadingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutPageTeamHeadingGroupByOutputType[P]>
            : GetScalarType<T[P], AboutPageTeamHeadingGroupByOutputType[P]>
        }
      >
    >


  export type AboutPageTeamHeadingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutPageTeamHeading"]>

  export type AboutPageTeamHeadingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutPageTeamHeading"]>

  export type AboutPageTeamHeadingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutPageTeamHeading"]>

  export type AboutPageTeamHeadingSelectScalar = {
    id?: boolean
    lang?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AboutPageTeamHeadingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lang" | "title" | "createdAt" | "updatedAt", ExtArgs["result"]["aboutPageTeamHeading"]>

  export type $AboutPageTeamHeadingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutPageTeamHeading"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lang: string
      title: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aboutPageTeamHeading"]>
    composites: {}
  }

  type AboutPageTeamHeadingGetPayload<S extends boolean | null | undefined | AboutPageTeamHeadingDefaultArgs> = $Result.GetResult<Prisma.$AboutPageTeamHeadingPayload, S>

  type AboutPageTeamHeadingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AboutPageTeamHeadingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AboutPageTeamHeadingCountAggregateInputType | true
    }

  export interface AboutPageTeamHeadingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutPageTeamHeading'], meta: { name: 'AboutPageTeamHeading' } }
    /**
     * Find zero or one AboutPageTeamHeading that matches the filter.
     * @param {AboutPageTeamHeadingFindUniqueArgs} args - Arguments to find a AboutPageTeamHeading
     * @example
     * // Get one AboutPageTeamHeading
     * const aboutPageTeamHeading = await prisma.aboutPageTeamHeading.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutPageTeamHeadingFindUniqueArgs>(args: SelectSubset<T, AboutPageTeamHeadingFindUniqueArgs<ExtArgs>>): Prisma__AboutPageTeamHeadingClient<$Result.GetResult<Prisma.$AboutPageTeamHeadingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AboutPageTeamHeading that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AboutPageTeamHeadingFindUniqueOrThrowArgs} args - Arguments to find a AboutPageTeamHeading
     * @example
     * // Get one AboutPageTeamHeading
     * const aboutPageTeamHeading = await prisma.aboutPageTeamHeading.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutPageTeamHeadingFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutPageTeamHeadingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutPageTeamHeadingClient<$Result.GetResult<Prisma.$AboutPageTeamHeadingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AboutPageTeamHeading that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageTeamHeadingFindFirstArgs} args - Arguments to find a AboutPageTeamHeading
     * @example
     * // Get one AboutPageTeamHeading
     * const aboutPageTeamHeading = await prisma.aboutPageTeamHeading.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutPageTeamHeadingFindFirstArgs>(args?: SelectSubset<T, AboutPageTeamHeadingFindFirstArgs<ExtArgs>>): Prisma__AboutPageTeamHeadingClient<$Result.GetResult<Prisma.$AboutPageTeamHeadingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AboutPageTeamHeading that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageTeamHeadingFindFirstOrThrowArgs} args - Arguments to find a AboutPageTeamHeading
     * @example
     * // Get one AboutPageTeamHeading
     * const aboutPageTeamHeading = await prisma.aboutPageTeamHeading.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutPageTeamHeadingFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutPageTeamHeadingFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutPageTeamHeadingClient<$Result.GetResult<Prisma.$AboutPageTeamHeadingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AboutPageTeamHeadings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageTeamHeadingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AboutPageTeamHeadings
     * const aboutPageTeamHeadings = await prisma.aboutPageTeamHeading.findMany()
     * 
     * // Get first 10 AboutPageTeamHeadings
     * const aboutPageTeamHeadings = await prisma.aboutPageTeamHeading.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutPageTeamHeadingWithIdOnly = await prisma.aboutPageTeamHeading.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutPageTeamHeadingFindManyArgs>(args?: SelectSubset<T, AboutPageTeamHeadingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPageTeamHeadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AboutPageTeamHeading.
     * @param {AboutPageTeamHeadingCreateArgs} args - Arguments to create a AboutPageTeamHeading.
     * @example
     * // Create one AboutPageTeamHeading
     * const AboutPageTeamHeading = await prisma.aboutPageTeamHeading.create({
     *   data: {
     *     // ... data to create a AboutPageTeamHeading
     *   }
     * })
     * 
     */
    create<T extends AboutPageTeamHeadingCreateArgs>(args: SelectSubset<T, AboutPageTeamHeadingCreateArgs<ExtArgs>>): Prisma__AboutPageTeamHeadingClient<$Result.GetResult<Prisma.$AboutPageTeamHeadingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AboutPageTeamHeadings.
     * @param {AboutPageTeamHeadingCreateManyArgs} args - Arguments to create many AboutPageTeamHeadings.
     * @example
     * // Create many AboutPageTeamHeadings
     * const aboutPageTeamHeading = await prisma.aboutPageTeamHeading.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutPageTeamHeadingCreateManyArgs>(args?: SelectSubset<T, AboutPageTeamHeadingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AboutPageTeamHeadings and returns the data saved in the database.
     * @param {AboutPageTeamHeadingCreateManyAndReturnArgs} args - Arguments to create many AboutPageTeamHeadings.
     * @example
     * // Create many AboutPageTeamHeadings
     * const aboutPageTeamHeading = await prisma.aboutPageTeamHeading.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AboutPageTeamHeadings and only return the `id`
     * const aboutPageTeamHeadingWithIdOnly = await prisma.aboutPageTeamHeading.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutPageTeamHeadingCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutPageTeamHeadingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPageTeamHeadingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AboutPageTeamHeading.
     * @param {AboutPageTeamHeadingDeleteArgs} args - Arguments to delete one AboutPageTeamHeading.
     * @example
     * // Delete one AboutPageTeamHeading
     * const AboutPageTeamHeading = await prisma.aboutPageTeamHeading.delete({
     *   where: {
     *     // ... filter to delete one AboutPageTeamHeading
     *   }
     * })
     * 
     */
    delete<T extends AboutPageTeamHeadingDeleteArgs>(args: SelectSubset<T, AboutPageTeamHeadingDeleteArgs<ExtArgs>>): Prisma__AboutPageTeamHeadingClient<$Result.GetResult<Prisma.$AboutPageTeamHeadingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AboutPageTeamHeading.
     * @param {AboutPageTeamHeadingUpdateArgs} args - Arguments to update one AboutPageTeamHeading.
     * @example
     * // Update one AboutPageTeamHeading
     * const aboutPageTeamHeading = await prisma.aboutPageTeamHeading.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutPageTeamHeadingUpdateArgs>(args: SelectSubset<T, AboutPageTeamHeadingUpdateArgs<ExtArgs>>): Prisma__AboutPageTeamHeadingClient<$Result.GetResult<Prisma.$AboutPageTeamHeadingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AboutPageTeamHeadings.
     * @param {AboutPageTeamHeadingDeleteManyArgs} args - Arguments to filter AboutPageTeamHeadings to delete.
     * @example
     * // Delete a few AboutPageTeamHeadings
     * const { count } = await prisma.aboutPageTeamHeading.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutPageTeamHeadingDeleteManyArgs>(args?: SelectSubset<T, AboutPageTeamHeadingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutPageTeamHeadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageTeamHeadingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AboutPageTeamHeadings
     * const aboutPageTeamHeading = await prisma.aboutPageTeamHeading.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutPageTeamHeadingUpdateManyArgs>(args: SelectSubset<T, AboutPageTeamHeadingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutPageTeamHeadings and returns the data updated in the database.
     * @param {AboutPageTeamHeadingUpdateManyAndReturnArgs} args - Arguments to update many AboutPageTeamHeadings.
     * @example
     * // Update many AboutPageTeamHeadings
     * const aboutPageTeamHeading = await prisma.aboutPageTeamHeading.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AboutPageTeamHeadings and only return the `id`
     * const aboutPageTeamHeadingWithIdOnly = await prisma.aboutPageTeamHeading.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AboutPageTeamHeadingUpdateManyAndReturnArgs>(args: SelectSubset<T, AboutPageTeamHeadingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPageTeamHeadingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AboutPageTeamHeading.
     * @param {AboutPageTeamHeadingUpsertArgs} args - Arguments to update or create a AboutPageTeamHeading.
     * @example
     * // Update or create a AboutPageTeamHeading
     * const aboutPageTeamHeading = await prisma.aboutPageTeamHeading.upsert({
     *   create: {
     *     // ... data to create a AboutPageTeamHeading
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutPageTeamHeading we want to update
     *   }
     * })
     */
    upsert<T extends AboutPageTeamHeadingUpsertArgs>(args: SelectSubset<T, AboutPageTeamHeadingUpsertArgs<ExtArgs>>): Prisma__AboutPageTeamHeadingClient<$Result.GetResult<Prisma.$AboutPageTeamHeadingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AboutPageTeamHeadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageTeamHeadingCountArgs} args - Arguments to filter AboutPageTeamHeadings to count.
     * @example
     * // Count the number of AboutPageTeamHeadings
     * const count = await prisma.aboutPageTeamHeading.count({
     *   where: {
     *     // ... the filter for the AboutPageTeamHeadings we want to count
     *   }
     * })
    **/
    count<T extends AboutPageTeamHeadingCountArgs>(
      args?: Subset<T, AboutPageTeamHeadingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutPageTeamHeadingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutPageTeamHeading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageTeamHeadingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AboutPageTeamHeadingAggregateArgs>(args: Subset<T, AboutPageTeamHeadingAggregateArgs>): Prisma.PrismaPromise<GetAboutPageTeamHeadingAggregateType<T>>

    /**
     * Group by AboutPageTeamHeading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageTeamHeadingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AboutPageTeamHeadingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutPageTeamHeadingGroupByArgs['orderBy'] }
        : { orderBy?: AboutPageTeamHeadingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AboutPageTeamHeadingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutPageTeamHeadingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutPageTeamHeading model
   */
  readonly fields: AboutPageTeamHeadingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutPageTeamHeading.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutPageTeamHeadingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AboutPageTeamHeading model
   */
  interface AboutPageTeamHeadingFieldRefs {
    readonly id: FieldRef<"AboutPageTeamHeading", 'String'>
    readonly lang: FieldRef<"AboutPageTeamHeading", 'String'>
    readonly title: FieldRef<"AboutPageTeamHeading", 'String'>
    readonly createdAt: FieldRef<"AboutPageTeamHeading", 'DateTime'>
    readonly updatedAt: FieldRef<"AboutPageTeamHeading", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AboutPageTeamHeading findUnique
   */
  export type AboutPageTeamHeadingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeamHeading
     */
    select?: AboutPageTeamHeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeamHeading
     */
    omit?: AboutPageTeamHeadingOmit<ExtArgs> | null
    /**
     * Filter, which AboutPageTeamHeading to fetch.
     */
    where: AboutPageTeamHeadingWhereUniqueInput
  }

  /**
   * AboutPageTeamHeading findUniqueOrThrow
   */
  export type AboutPageTeamHeadingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeamHeading
     */
    select?: AboutPageTeamHeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeamHeading
     */
    omit?: AboutPageTeamHeadingOmit<ExtArgs> | null
    /**
     * Filter, which AboutPageTeamHeading to fetch.
     */
    where: AboutPageTeamHeadingWhereUniqueInput
  }

  /**
   * AboutPageTeamHeading findFirst
   */
  export type AboutPageTeamHeadingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeamHeading
     */
    select?: AboutPageTeamHeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeamHeading
     */
    omit?: AboutPageTeamHeadingOmit<ExtArgs> | null
    /**
     * Filter, which AboutPageTeamHeading to fetch.
     */
    where?: AboutPageTeamHeadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutPageTeamHeadings to fetch.
     */
    orderBy?: AboutPageTeamHeadingOrderByWithRelationInput | AboutPageTeamHeadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutPageTeamHeadings.
     */
    cursor?: AboutPageTeamHeadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutPageTeamHeadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutPageTeamHeadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutPageTeamHeadings.
     */
    distinct?: AboutPageTeamHeadingScalarFieldEnum | AboutPageTeamHeadingScalarFieldEnum[]
  }

  /**
   * AboutPageTeamHeading findFirstOrThrow
   */
  export type AboutPageTeamHeadingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeamHeading
     */
    select?: AboutPageTeamHeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeamHeading
     */
    omit?: AboutPageTeamHeadingOmit<ExtArgs> | null
    /**
     * Filter, which AboutPageTeamHeading to fetch.
     */
    where?: AboutPageTeamHeadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutPageTeamHeadings to fetch.
     */
    orderBy?: AboutPageTeamHeadingOrderByWithRelationInput | AboutPageTeamHeadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutPageTeamHeadings.
     */
    cursor?: AboutPageTeamHeadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutPageTeamHeadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutPageTeamHeadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutPageTeamHeadings.
     */
    distinct?: AboutPageTeamHeadingScalarFieldEnum | AboutPageTeamHeadingScalarFieldEnum[]
  }

  /**
   * AboutPageTeamHeading findMany
   */
  export type AboutPageTeamHeadingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeamHeading
     */
    select?: AboutPageTeamHeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeamHeading
     */
    omit?: AboutPageTeamHeadingOmit<ExtArgs> | null
    /**
     * Filter, which AboutPageTeamHeadings to fetch.
     */
    where?: AboutPageTeamHeadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutPageTeamHeadings to fetch.
     */
    orderBy?: AboutPageTeamHeadingOrderByWithRelationInput | AboutPageTeamHeadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AboutPageTeamHeadings.
     */
    cursor?: AboutPageTeamHeadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutPageTeamHeadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutPageTeamHeadings.
     */
    skip?: number
    distinct?: AboutPageTeamHeadingScalarFieldEnum | AboutPageTeamHeadingScalarFieldEnum[]
  }

  /**
   * AboutPageTeamHeading create
   */
  export type AboutPageTeamHeadingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeamHeading
     */
    select?: AboutPageTeamHeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeamHeading
     */
    omit?: AboutPageTeamHeadingOmit<ExtArgs> | null
    /**
     * The data needed to create a AboutPageTeamHeading.
     */
    data: XOR<AboutPageTeamHeadingCreateInput, AboutPageTeamHeadingUncheckedCreateInput>
  }

  /**
   * AboutPageTeamHeading createMany
   */
  export type AboutPageTeamHeadingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AboutPageTeamHeadings.
     */
    data: AboutPageTeamHeadingCreateManyInput | AboutPageTeamHeadingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutPageTeamHeading createManyAndReturn
   */
  export type AboutPageTeamHeadingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeamHeading
     */
    select?: AboutPageTeamHeadingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeamHeading
     */
    omit?: AboutPageTeamHeadingOmit<ExtArgs> | null
    /**
     * The data used to create many AboutPageTeamHeadings.
     */
    data: AboutPageTeamHeadingCreateManyInput | AboutPageTeamHeadingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutPageTeamHeading update
   */
  export type AboutPageTeamHeadingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeamHeading
     */
    select?: AboutPageTeamHeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeamHeading
     */
    omit?: AboutPageTeamHeadingOmit<ExtArgs> | null
    /**
     * The data needed to update a AboutPageTeamHeading.
     */
    data: XOR<AboutPageTeamHeadingUpdateInput, AboutPageTeamHeadingUncheckedUpdateInput>
    /**
     * Choose, which AboutPageTeamHeading to update.
     */
    where: AboutPageTeamHeadingWhereUniqueInput
  }

  /**
   * AboutPageTeamHeading updateMany
   */
  export type AboutPageTeamHeadingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AboutPageTeamHeadings.
     */
    data: XOR<AboutPageTeamHeadingUpdateManyMutationInput, AboutPageTeamHeadingUncheckedUpdateManyInput>
    /**
     * Filter which AboutPageTeamHeadings to update
     */
    where?: AboutPageTeamHeadingWhereInput
    /**
     * Limit how many AboutPageTeamHeadings to update.
     */
    limit?: number
  }

  /**
   * AboutPageTeamHeading updateManyAndReturn
   */
  export type AboutPageTeamHeadingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeamHeading
     */
    select?: AboutPageTeamHeadingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeamHeading
     */
    omit?: AboutPageTeamHeadingOmit<ExtArgs> | null
    /**
     * The data used to update AboutPageTeamHeadings.
     */
    data: XOR<AboutPageTeamHeadingUpdateManyMutationInput, AboutPageTeamHeadingUncheckedUpdateManyInput>
    /**
     * Filter which AboutPageTeamHeadings to update
     */
    where?: AboutPageTeamHeadingWhereInput
    /**
     * Limit how many AboutPageTeamHeadings to update.
     */
    limit?: number
  }

  /**
   * AboutPageTeamHeading upsert
   */
  export type AboutPageTeamHeadingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeamHeading
     */
    select?: AboutPageTeamHeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeamHeading
     */
    omit?: AboutPageTeamHeadingOmit<ExtArgs> | null
    /**
     * The filter to search for the AboutPageTeamHeading to update in case it exists.
     */
    where: AboutPageTeamHeadingWhereUniqueInput
    /**
     * In case the AboutPageTeamHeading found by the `where` argument doesn't exist, create a new AboutPageTeamHeading with this data.
     */
    create: XOR<AboutPageTeamHeadingCreateInput, AboutPageTeamHeadingUncheckedCreateInput>
    /**
     * In case the AboutPageTeamHeading was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutPageTeamHeadingUpdateInput, AboutPageTeamHeadingUncheckedUpdateInput>
  }

  /**
   * AboutPageTeamHeading delete
   */
  export type AboutPageTeamHeadingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeamHeading
     */
    select?: AboutPageTeamHeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeamHeading
     */
    omit?: AboutPageTeamHeadingOmit<ExtArgs> | null
    /**
     * Filter which AboutPageTeamHeading to delete.
     */
    where: AboutPageTeamHeadingWhereUniqueInput
  }

  /**
   * AboutPageTeamHeading deleteMany
   */
  export type AboutPageTeamHeadingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutPageTeamHeadings to delete
     */
    where?: AboutPageTeamHeadingWhereInput
    /**
     * Limit how many AboutPageTeamHeadings to delete.
     */
    limit?: number
  }

  /**
   * AboutPageTeamHeading without action
   */
  export type AboutPageTeamHeadingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeamHeading
     */
    select?: AboutPageTeamHeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeamHeading
     */
    omit?: AboutPageTeamHeadingOmit<ExtArgs> | null
  }


  /**
   * Model AboutPageTeam
   */

  export type AggregateAboutPageTeam = {
    _count: AboutPageTeamCountAggregateOutputType | null
    _min: AboutPageTeamMinAggregateOutputType | null
    _max: AboutPageTeamMaxAggregateOutputType | null
  }

  export type AboutPageTeamMinAggregateOutputType = {
    id: string | null
    lang: string | null
    image: string | null
    name: string | null
    profession: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutPageTeamMaxAggregateOutputType = {
    id: string | null
    lang: string | null
    image: string | null
    name: string | null
    profession: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutPageTeamCountAggregateOutputType = {
    id: number
    lang: number
    image: number
    name: number
    profession: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AboutPageTeamMinAggregateInputType = {
    id?: true
    lang?: true
    image?: true
    name?: true
    profession?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutPageTeamMaxAggregateInputType = {
    id?: true
    lang?: true
    image?: true
    name?: true
    profession?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutPageTeamCountAggregateInputType = {
    id?: true
    lang?: true
    image?: true
    name?: true
    profession?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AboutPageTeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutPageTeam to aggregate.
     */
    where?: AboutPageTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutPageTeams to fetch.
     */
    orderBy?: AboutPageTeamOrderByWithRelationInput | AboutPageTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutPageTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutPageTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutPageTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AboutPageTeams
    **/
    _count?: true | AboutPageTeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutPageTeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutPageTeamMaxAggregateInputType
  }

  export type GetAboutPageTeamAggregateType<T extends AboutPageTeamAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutPageTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutPageTeam[P]>
      : GetScalarType<T[P], AggregateAboutPageTeam[P]>
  }




  export type AboutPageTeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutPageTeamWhereInput
    orderBy?: AboutPageTeamOrderByWithAggregationInput | AboutPageTeamOrderByWithAggregationInput[]
    by: AboutPageTeamScalarFieldEnum[] | AboutPageTeamScalarFieldEnum
    having?: AboutPageTeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutPageTeamCountAggregateInputType | true
    _min?: AboutPageTeamMinAggregateInputType
    _max?: AboutPageTeamMaxAggregateInputType
  }

  export type AboutPageTeamGroupByOutputType = {
    id: string
    lang: string
    image: string
    name: string
    profession: string
    createdAt: Date
    updatedAt: Date
    _count: AboutPageTeamCountAggregateOutputType | null
    _min: AboutPageTeamMinAggregateOutputType | null
    _max: AboutPageTeamMaxAggregateOutputType | null
  }

  type GetAboutPageTeamGroupByPayload<T extends AboutPageTeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutPageTeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutPageTeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutPageTeamGroupByOutputType[P]>
            : GetScalarType<T[P], AboutPageTeamGroupByOutputType[P]>
        }
      >
    >


  export type AboutPageTeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    image?: boolean
    name?: boolean
    profession?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutPageTeam"]>

  export type AboutPageTeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    image?: boolean
    name?: boolean
    profession?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutPageTeam"]>

  export type AboutPageTeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    image?: boolean
    name?: boolean
    profession?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutPageTeam"]>

  export type AboutPageTeamSelectScalar = {
    id?: boolean
    lang?: boolean
    image?: boolean
    name?: boolean
    profession?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AboutPageTeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lang" | "image" | "name" | "profession" | "createdAt" | "updatedAt", ExtArgs["result"]["aboutPageTeam"]>

  export type $AboutPageTeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutPageTeam"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lang: string
      image: string
      name: string
      profession: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aboutPageTeam"]>
    composites: {}
  }

  type AboutPageTeamGetPayload<S extends boolean | null | undefined | AboutPageTeamDefaultArgs> = $Result.GetResult<Prisma.$AboutPageTeamPayload, S>

  type AboutPageTeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AboutPageTeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AboutPageTeamCountAggregateInputType | true
    }

  export interface AboutPageTeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutPageTeam'], meta: { name: 'AboutPageTeam' } }
    /**
     * Find zero or one AboutPageTeam that matches the filter.
     * @param {AboutPageTeamFindUniqueArgs} args - Arguments to find a AboutPageTeam
     * @example
     * // Get one AboutPageTeam
     * const aboutPageTeam = await prisma.aboutPageTeam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutPageTeamFindUniqueArgs>(args: SelectSubset<T, AboutPageTeamFindUniqueArgs<ExtArgs>>): Prisma__AboutPageTeamClient<$Result.GetResult<Prisma.$AboutPageTeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AboutPageTeam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AboutPageTeamFindUniqueOrThrowArgs} args - Arguments to find a AboutPageTeam
     * @example
     * // Get one AboutPageTeam
     * const aboutPageTeam = await prisma.aboutPageTeam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutPageTeamFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutPageTeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutPageTeamClient<$Result.GetResult<Prisma.$AboutPageTeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AboutPageTeam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageTeamFindFirstArgs} args - Arguments to find a AboutPageTeam
     * @example
     * // Get one AboutPageTeam
     * const aboutPageTeam = await prisma.aboutPageTeam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutPageTeamFindFirstArgs>(args?: SelectSubset<T, AboutPageTeamFindFirstArgs<ExtArgs>>): Prisma__AboutPageTeamClient<$Result.GetResult<Prisma.$AboutPageTeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AboutPageTeam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageTeamFindFirstOrThrowArgs} args - Arguments to find a AboutPageTeam
     * @example
     * // Get one AboutPageTeam
     * const aboutPageTeam = await prisma.aboutPageTeam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutPageTeamFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutPageTeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutPageTeamClient<$Result.GetResult<Prisma.$AboutPageTeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AboutPageTeams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageTeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AboutPageTeams
     * const aboutPageTeams = await prisma.aboutPageTeam.findMany()
     * 
     * // Get first 10 AboutPageTeams
     * const aboutPageTeams = await prisma.aboutPageTeam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutPageTeamWithIdOnly = await prisma.aboutPageTeam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutPageTeamFindManyArgs>(args?: SelectSubset<T, AboutPageTeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPageTeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AboutPageTeam.
     * @param {AboutPageTeamCreateArgs} args - Arguments to create a AboutPageTeam.
     * @example
     * // Create one AboutPageTeam
     * const AboutPageTeam = await prisma.aboutPageTeam.create({
     *   data: {
     *     // ... data to create a AboutPageTeam
     *   }
     * })
     * 
     */
    create<T extends AboutPageTeamCreateArgs>(args: SelectSubset<T, AboutPageTeamCreateArgs<ExtArgs>>): Prisma__AboutPageTeamClient<$Result.GetResult<Prisma.$AboutPageTeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AboutPageTeams.
     * @param {AboutPageTeamCreateManyArgs} args - Arguments to create many AboutPageTeams.
     * @example
     * // Create many AboutPageTeams
     * const aboutPageTeam = await prisma.aboutPageTeam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutPageTeamCreateManyArgs>(args?: SelectSubset<T, AboutPageTeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AboutPageTeams and returns the data saved in the database.
     * @param {AboutPageTeamCreateManyAndReturnArgs} args - Arguments to create many AboutPageTeams.
     * @example
     * // Create many AboutPageTeams
     * const aboutPageTeam = await prisma.aboutPageTeam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AboutPageTeams and only return the `id`
     * const aboutPageTeamWithIdOnly = await prisma.aboutPageTeam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutPageTeamCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutPageTeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPageTeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AboutPageTeam.
     * @param {AboutPageTeamDeleteArgs} args - Arguments to delete one AboutPageTeam.
     * @example
     * // Delete one AboutPageTeam
     * const AboutPageTeam = await prisma.aboutPageTeam.delete({
     *   where: {
     *     // ... filter to delete one AboutPageTeam
     *   }
     * })
     * 
     */
    delete<T extends AboutPageTeamDeleteArgs>(args: SelectSubset<T, AboutPageTeamDeleteArgs<ExtArgs>>): Prisma__AboutPageTeamClient<$Result.GetResult<Prisma.$AboutPageTeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AboutPageTeam.
     * @param {AboutPageTeamUpdateArgs} args - Arguments to update one AboutPageTeam.
     * @example
     * // Update one AboutPageTeam
     * const aboutPageTeam = await prisma.aboutPageTeam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutPageTeamUpdateArgs>(args: SelectSubset<T, AboutPageTeamUpdateArgs<ExtArgs>>): Prisma__AboutPageTeamClient<$Result.GetResult<Prisma.$AboutPageTeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AboutPageTeams.
     * @param {AboutPageTeamDeleteManyArgs} args - Arguments to filter AboutPageTeams to delete.
     * @example
     * // Delete a few AboutPageTeams
     * const { count } = await prisma.aboutPageTeam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutPageTeamDeleteManyArgs>(args?: SelectSubset<T, AboutPageTeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutPageTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageTeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AboutPageTeams
     * const aboutPageTeam = await prisma.aboutPageTeam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutPageTeamUpdateManyArgs>(args: SelectSubset<T, AboutPageTeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutPageTeams and returns the data updated in the database.
     * @param {AboutPageTeamUpdateManyAndReturnArgs} args - Arguments to update many AboutPageTeams.
     * @example
     * // Update many AboutPageTeams
     * const aboutPageTeam = await prisma.aboutPageTeam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AboutPageTeams and only return the `id`
     * const aboutPageTeamWithIdOnly = await prisma.aboutPageTeam.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AboutPageTeamUpdateManyAndReturnArgs>(args: SelectSubset<T, AboutPageTeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPageTeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AboutPageTeam.
     * @param {AboutPageTeamUpsertArgs} args - Arguments to update or create a AboutPageTeam.
     * @example
     * // Update or create a AboutPageTeam
     * const aboutPageTeam = await prisma.aboutPageTeam.upsert({
     *   create: {
     *     // ... data to create a AboutPageTeam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutPageTeam we want to update
     *   }
     * })
     */
    upsert<T extends AboutPageTeamUpsertArgs>(args: SelectSubset<T, AboutPageTeamUpsertArgs<ExtArgs>>): Prisma__AboutPageTeamClient<$Result.GetResult<Prisma.$AboutPageTeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AboutPageTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageTeamCountArgs} args - Arguments to filter AboutPageTeams to count.
     * @example
     * // Count the number of AboutPageTeams
     * const count = await prisma.aboutPageTeam.count({
     *   where: {
     *     // ... the filter for the AboutPageTeams we want to count
     *   }
     * })
    **/
    count<T extends AboutPageTeamCountArgs>(
      args?: Subset<T, AboutPageTeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutPageTeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutPageTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageTeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AboutPageTeamAggregateArgs>(args: Subset<T, AboutPageTeamAggregateArgs>): Prisma.PrismaPromise<GetAboutPageTeamAggregateType<T>>

    /**
     * Group by AboutPageTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageTeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AboutPageTeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutPageTeamGroupByArgs['orderBy'] }
        : { orderBy?: AboutPageTeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AboutPageTeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutPageTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutPageTeam model
   */
  readonly fields: AboutPageTeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutPageTeam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutPageTeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AboutPageTeam model
   */
  interface AboutPageTeamFieldRefs {
    readonly id: FieldRef<"AboutPageTeam", 'String'>
    readonly lang: FieldRef<"AboutPageTeam", 'String'>
    readonly image: FieldRef<"AboutPageTeam", 'String'>
    readonly name: FieldRef<"AboutPageTeam", 'String'>
    readonly profession: FieldRef<"AboutPageTeam", 'String'>
    readonly createdAt: FieldRef<"AboutPageTeam", 'DateTime'>
    readonly updatedAt: FieldRef<"AboutPageTeam", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AboutPageTeam findUnique
   */
  export type AboutPageTeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeam
     */
    select?: AboutPageTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeam
     */
    omit?: AboutPageTeamOmit<ExtArgs> | null
    /**
     * Filter, which AboutPageTeam to fetch.
     */
    where: AboutPageTeamWhereUniqueInput
  }

  /**
   * AboutPageTeam findUniqueOrThrow
   */
  export type AboutPageTeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeam
     */
    select?: AboutPageTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeam
     */
    omit?: AboutPageTeamOmit<ExtArgs> | null
    /**
     * Filter, which AboutPageTeam to fetch.
     */
    where: AboutPageTeamWhereUniqueInput
  }

  /**
   * AboutPageTeam findFirst
   */
  export type AboutPageTeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeam
     */
    select?: AboutPageTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeam
     */
    omit?: AboutPageTeamOmit<ExtArgs> | null
    /**
     * Filter, which AboutPageTeam to fetch.
     */
    where?: AboutPageTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutPageTeams to fetch.
     */
    orderBy?: AboutPageTeamOrderByWithRelationInput | AboutPageTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutPageTeams.
     */
    cursor?: AboutPageTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutPageTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutPageTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutPageTeams.
     */
    distinct?: AboutPageTeamScalarFieldEnum | AboutPageTeamScalarFieldEnum[]
  }

  /**
   * AboutPageTeam findFirstOrThrow
   */
  export type AboutPageTeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeam
     */
    select?: AboutPageTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeam
     */
    omit?: AboutPageTeamOmit<ExtArgs> | null
    /**
     * Filter, which AboutPageTeam to fetch.
     */
    where?: AboutPageTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutPageTeams to fetch.
     */
    orderBy?: AboutPageTeamOrderByWithRelationInput | AboutPageTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutPageTeams.
     */
    cursor?: AboutPageTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutPageTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutPageTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutPageTeams.
     */
    distinct?: AboutPageTeamScalarFieldEnum | AboutPageTeamScalarFieldEnum[]
  }

  /**
   * AboutPageTeam findMany
   */
  export type AboutPageTeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeam
     */
    select?: AboutPageTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeam
     */
    omit?: AboutPageTeamOmit<ExtArgs> | null
    /**
     * Filter, which AboutPageTeams to fetch.
     */
    where?: AboutPageTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutPageTeams to fetch.
     */
    orderBy?: AboutPageTeamOrderByWithRelationInput | AboutPageTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AboutPageTeams.
     */
    cursor?: AboutPageTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutPageTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutPageTeams.
     */
    skip?: number
    distinct?: AboutPageTeamScalarFieldEnum | AboutPageTeamScalarFieldEnum[]
  }

  /**
   * AboutPageTeam create
   */
  export type AboutPageTeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeam
     */
    select?: AboutPageTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeam
     */
    omit?: AboutPageTeamOmit<ExtArgs> | null
    /**
     * The data needed to create a AboutPageTeam.
     */
    data: XOR<AboutPageTeamCreateInput, AboutPageTeamUncheckedCreateInput>
  }

  /**
   * AboutPageTeam createMany
   */
  export type AboutPageTeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AboutPageTeams.
     */
    data: AboutPageTeamCreateManyInput | AboutPageTeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutPageTeam createManyAndReturn
   */
  export type AboutPageTeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeam
     */
    select?: AboutPageTeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeam
     */
    omit?: AboutPageTeamOmit<ExtArgs> | null
    /**
     * The data used to create many AboutPageTeams.
     */
    data: AboutPageTeamCreateManyInput | AboutPageTeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutPageTeam update
   */
  export type AboutPageTeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeam
     */
    select?: AboutPageTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeam
     */
    omit?: AboutPageTeamOmit<ExtArgs> | null
    /**
     * The data needed to update a AboutPageTeam.
     */
    data: XOR<AboutPageTeamUpdateInput, AboutPageTeamUncheckedUpdateInput>
    /**
     * Choose, which AboutPageTeam to update.
     */
    where: AboutPageTeamWhereUniqueInput
  }

  /**
   * AboutPageTeam updateMany
   */
  export type AboutPageTeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AboutPageTeams.
     */
    data: XOR<AboutPageTeamUpdateManyMutationInput, AboutPageTeamUncheckedUpdateManyInput>
    /**
     * Filter which AboutPageTeams to update
     */
    where?: AboutPageTeamWhereInput
    /**
     * Limit how many AboutPageTeams to update.
     */
    limit?: number
  }

  /**
   * AboutPageTeam updateManyAndReturn
   */
  export type AboutPageTeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeam
     */
    select?: AboutPageTeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeam
     */
    omit?: AboutPageTeamOmit<ExtArgs> | null
    /**
     * The data used to update AboutPageTeams.
     */
    data: XOR<AboutPageTeamUpdateManyMutationInput, AboutPageTeamUncheckedUpdateManyInput>
    /**
     * Filter which AboutPageTeams to update
     */
    where?: AboutPageTeamWhereInput
    /**
     * Limit how many AboutPageTeams to update.
     */
    limit?: number
  }

  /**
   * AboutPageTeam upsert
   */
  export type AboutPageTeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeam
     */
    select?: AboutPageTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeam
     */
    omit?: AboutPageTeamOmit<ExtArgs> | null
    /**
     * The filter to search for the AboutPageTeam to update in case it exists.
     */
    where: AboutPageTeamWhereUniqueInput
    /**
     * In case the AboutPageTeam found by the `where` argument doesn't exist, create a new AboutPageTeam with this data.
     */
    create: XOR<AboutPageTeamCreateInput, AboutPageTeamUncheckedCreateInput>
    /**
     * In case the AboutPageTeam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutPageTeamUpdateInput, AboutPageTeamUncheckedUpdateInput>
  }

  /**
   * AboutPageTeam delete
   */
  export type AboutPageTeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeam
     */
    select?: AboutPageTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeam
     */
    omit?: AboutPageTeamOmit<ExtArgs> | null
    /**
     * Filter which AboutPageTeam to delete.
     */
    where: AboutPageTeamWhereUniqueInput
  }

  /**
   * AboutPageTeam deleteMany
   */
  export type AboutPageTeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutPageTeams to delete
     */
    where?: AboutPageTeamWhereInput
    /**
     * Limit how many AboutPageTeams to delete.
     */
    limit?: number
  }

  /**
   * AboutPageTeam without action
   */
  export type AboutPageTeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPageTeam
     */
    select?: AboutPageTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPageTeam
     */
    omit?: AboutPageTeamOmit<ExtArgs> | null
  }


  /**
   * Model ContactPageContent
   */

  export type AggregateContactPageContent = {
    _count: ContactPageContentCountAggregateOutputType | null
    _min: ContactPageContentMinAggregateOutputType | null
    _max: ContactPageContentMaxAggregateOutputType | null
  }

  export type ContactPageContentMinAggregateOutputType = {
    id: string | null
    lang: string | null
    title: string | null
    name_placeholder: string | null
    email_placeholder: string | null
    message_placeholder: string | null
    btn_text: string | null
    successful_text: string | null
    error_text: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactPageContentMaxAggregateOutputType = {
    id: string | null
    lang: string | null
    title: string | null
    name_placeholder: string | null
    email_placeholder: string | null
    message_placeholder: string | null
    btn_text: string | null
    successful_text: string | null
    error_text: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactPageContentCountAggregateOutputType = {
    id: number
    lang: number
    title: number
    name_placeholder: number
    email_placeholder: number
    message_placeholder: number
    btn_text: number
    successful_text: number
    error_text: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactPageContentMinAggregateInputType = {
    id?: true
    lang?: true
    title?: true
    name_placeholder?: true
    email_placeholder?: true
    message_placeholder?: true
    btn_text?: true
    successful_text?: true
    error_text?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactPageContentMaxAggregateInputType = {
    id?: true
    lang?: true
    title?: true
    name_placeholder?: true
    email_placeholder?: true
    message_placeholder?: true
    btn_text?: true
    successful_text?: true
    error_text?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactPageContentCountAggregateInputType = {
    id?: true
    lang?: true
    title?: true
    name_placeholder?: true
    email_placeholder?: true
    message_placeholder?: true
    btn_text?: true
    successful_text?: true
    error_text?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactPageContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactPageContent to aggregate.
     */
    where?: ContactPageContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPageContents to fetch.
     */
    orderBy?: ContactPageContentOrderByWithRelationInput | ContactPageContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactPageContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPageContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPageContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactPageContents
    **/
    _count?: true | ContactPageContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactPageContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactPageContentMaxAggregateInputType
  }

  export type GetContactPageContentAggregateType<T extends ContactPageContentAggregateArgs> = {
        [P in keyof T & keyof AggregateContactPageContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactPageContent[P]>
      : GetScalarType<T[P], AggregateContactPageContent[P]>
  }




  export type ContactPageContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactPageContentWhereInput
    orderBy?: ContactPageContentOrderByWithAggregationInput | ContactPageContentOrderByWithAggregationInput[]
    by: ContactPageContentScalarFieldEnum[] | ContactPageContentScalarFieldEnum
    having?: ContactPageContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactPageContentCountAggregateInputType | true
    _min?: ContactPageContentMinAggregateInputType
    _max?: ContactPageContentMaxAggregateInputType
  }

  export type ContactPageContentGroupByOutputType = {
    id: string
    lang: string
    title: string
    name_placeholder: string
    email_placeholder: string
    message_placeholder: string
    btn_text: string
    successful_text: string
    error_text: string
    createdAt: Date
    updatedAt: Date
    _count: ContactPageContentCountAggregateOutputType | null
    _min: ContactPageContentMinAggregateOutputType | null
    _max: ContactPageContentMaxAggregateOutputType | null
  }

  type GetContactPageContentGroupByPayload<T extends ContactPageContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactPageContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactPageContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactPageContentGroupByOutputType[P]>
            : GetScalarType<T[P], ContactPageContentGroupByOutputType[P]>
        }
      >
    >


  export type ContactPageContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    title?: boolean
    name_placeholder?: boolean
    email_placeholder?: boolean
    message_placeholder?: boolean
    btn_text?: boolean
    successful_text?: boolean
    error_text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactPageContent"]>

  export type ContactPageContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    title?: boolean
    name_placeholder?: boolean
    email_placeholder?: boolean
    message_placeholder?: boolean
    btn_text?: boolean
    successful_text?: boolean
    error_text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactPageContent"]>

  export type ContactPageContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    title?: boolean
    name_placeholder?: boolean
    email_placeholder?: boolean
    message_placeholder?: boolean
    btn_text?: boolean
    successful_text?: boolean
    error_text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactPageContent"]>

  export type ContactPageContentSelectScalar = {
    id?: boolean
    lang?: boolean
    title?: boolean
    name_placeholder?: boolean
    email_placeholder?: boolean
    message_placeholder?: boolean
    btn_text?: boolean
    successful_text?: boolean
    error_text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactPageContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lang" | "title" | "name_placeholder" | "email_placeholder" | "message_placeholder" | "btn_text" | "successful_text" | "error_text" | "createdAt" | "updatedAt", ExtArgs["result"]["contactPageContent"]>

  export type $ContactPageContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactPageContent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lang: string
      title: string
      name_placeholder: string
      email_placeholder: string
      message_placeholder: string
      btn_text: string
      successful_text: string
      error_text: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactPageContent"]>
    composites: {}
  }

  type ContactPageContentGetPayload<S extends boolean | null | undefined | ContactPageContentDefaultArgs> = $Result.GetResult<Prisma.$ContactPageContentPayload, S>

  type ContactPageContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactPageContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactPageContentCountAggregateInputType | true
    }

  export interface ContactPageContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactPageContent'], meta: { name: 'ContactPageContent' } }
    /**
     * Find zero or one ContactPageContent that matches the filter.
     * @param {ContactPageContentFindUniqueArgs} args - Arguments to find a ContactPageContent
     * @example
     * // Get one ContactPageContent
     * const contactPageContent = await prisma.contactPageContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactPageContentFindUniqueArgs>(args: SelectSubset<T, ContactPageContentFindUniqueArgs<ExtArgs>>): Prisma__ContactPageContentClient<$Result.GetResult<Prisma.$ContactPageContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactPageContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactPageContentFindUniqueOrThrowArgs} args - Arguments to find a ContactPageContent
     * @example
     * // Get one ContactPageContent
     * const contactPageContent = await prisma.contactPageContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactPageContentFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactPageContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactPageContentClient<$Result.GetResult<Prisma.$ContactPageContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactPageContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPageContentFindFirstArgs} args - Arguments to find a ContactPageContent
     * @example
     * // Get one ContactPageContent
     * const contactPageContent = await prisma.contactPageContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactPageContentFindFirstArgs>(args?: SelectSubset<T, ContactPageContentFindFirstArgs<ExtArgs>>): Prisma__ContactPageContentClient<$Result.GetResult<Prisma.$ContactPageContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactPageContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPageContentFindFirstOrThrowArgs} args - Arguments to find a ContactPageContent
     * @example
     * // Get one ContactPageContent
     * const contactPageContent = await prisma.contactPageContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactPageContentFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactPageContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactPageContentClient<$Result.GetResult<Prisma.$ContactPageContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactPageContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPageContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactPageContents
     * const contactPageContents = await prisma.contactPageContent.findMany()
     * 
     * // Get first 10 ContactPageContents
     * const contactPageContents = await prisma.contactPageContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactPageContentWithIdOnly = await prisma.contactPageContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactPageContentFindManyArgs>(args?: SelectSubset<T, ContactPageContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPageContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactPageContent.
     * @param {ContactPageContentCreateArgs} args - Arguments to create a ContactPageContent.
     * @example
     * // Create one ContactPageContent
     * const ContactPageContent = await prisma.contactPageContent.create({
     *   data: {
     *     // ... data to create a ContactPageContent
     *   }
     * })
     * 
     */
    create<T extends ContactPageContentCreateArgs>(args: SelectSubset<T, ContactPageContentCreateArgs<ExtArgs>>): Prisma__ContactPageContentClient<$Result.GetResult<Prisma.$ContactPageContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactPageContents.
     * @param {ContactPageContentCreateManyArgs} args - Arguments to create many ContactPageContents.
     * @example
     * // Create many ContactPageContents
     * const contactPageContent = await prisma.contactPageContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactPageContentCreateManyArgs>(args?: SelectSubset<T, ContactPageContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactPageContents and returns the data saved in the database.
     * @param {ContactPageContentCreateManyAndReturnArgs} args - Arguments to create many ContactPageContents.
     * @example
     * // Create many ContactPageContents
     * const contactPageContent = await prisma.contactPageContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactPageContents and only return the `id`
     * const contactPageContentWithIdOnly = await prisma.contactPageContent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactPageContentCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactPageContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPageContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactPageContent.
     * @param {ContactPageContentDeleteArgs} args - Arguments to delete one ContactPageContent.
     * @example
     * // Delete one ContactPageContent
     * const ContactPageContent = await prisma.contactPageContent.delete({
     *   where: {
     *     // ... filter to delete one ContactPageContent
     *   }
     * })
     * 
     */
    delete<T extends ContactPageContentDeleteArgs>(args: SelectSubset<T, ContactPageContentDeleteArgs<ExtArgs>>): Prisma__ContactPageContentClient<$Result.GetResult<Prisma.$ContactPageContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactPageContent.
     * @param {ContactPageContentUpdateArgs} args - Arguments to update one ContactPageContent.
     * @example
     * // Update one ContactPageContent
     * const contactPageContent = await prisma.contactPageContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactPageContentUpdateArgs>(args: SelectSubset<T, ContactPageContentUpdateArgs<ExtArgs>>): Prisma__ContactPageContentClient<$Result.GetResult<Prisma.$ContactPageContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactPageContents.
     * @param {ContactPageContentDeleteManyArgs} args - Arguments to filter ContactPageContents to delete.
     * @example
     * // Delete a few ContactPageContents
     * const { count } = await prisma.contactPageContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactPageContentDeleteManyArgs>(args?: SelectSubset<T, ContactPageContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactPageContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPageContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactPageContents
     * const contactPageContent = await prisma.contactPageContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactPageContentUpdateManyArgs>(args: SelectSubset<T, ContactPageContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactPageContents and returns the data updated in the database.
     * @param {ContactPageContentUpdateManyAndReturnArgs} args - Arguments to update many ContactPageContents.
     * @example
     * // Update many ContactPageContents
     * const contactPageContent = await prisma.contactPageContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactPageContents and only return the `id`
     * const contactPageContentWithIdOnly = await prisma.contactPageContent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactPageContentUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactPageContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPageContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactPageContent.
     * @param {ContactPageContentUpsertArgs} args - Arguments to update or create a ContactPageContent.
     * @example
     * // Update or create a ContactPageContent
     * const contactPageContent = await prisma.contactPageContent.upsert({
     *   create: {
     *     // ... data to create a ContactPageContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactPageContent we want to update
     *   }
     * })
     */
    upsert<T extends ContactPageContentUpsertArgs>(args: SelectSubset<T, ContactPageContentUpsertArgs<ExtArgs>>): Prisma__ContactPageContentClient<$Result.GetResult<Prisma.$ContactPageContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactPageContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPageContentCountArgs} args - Arguments to filter ContactPageContents to count.
     * @example
     * // Count the number of ContactPageContents
     * const count = await prisma.contactPageContent.count({
     *   where: {
     *     // ... the filter for the ContactPageContents we want to count
     *   }
     * })
    **/
    count<T extends ContactPageContentCountArgs>(
      args?: Subset<T, ContactPageContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactPageContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactPageContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPageContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactPageContentAggregateArgs>(args: Subset<T, ContactPageContentAggregateArgs>): Prisma.PrismaPromise<GetContactPageContentAggregateType<T>>

    /**
     * Group by ContactPageContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPageContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactPageContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactPageContentGroupByArgs['orderBy'] }
        : { orderBy?: ContactPageContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactPageContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactPageContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactPageContent model
   */
  readonly fields: ContactPageContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactPageContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactPageContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactPageContent model
   */
  interface ContactPageContentFieldRefs {
    readonly id: FieldRef<"ContactPageContent", 'String'>
    readonly lang: FieldRef<"ContactPageContent", 'String'>
    readonly title: FieldRef<"ContactPageContent", 'String'>
    readonly name_placeholder: FieldRef<"ContactPageContent", 'String'>
    readonly email_placeholder: FieldRef<"ContactPageContent", 'String'>
    readonly message_placeholder: FieldRef<"ContactPageContent", 'String'>
    readonly btn_text: FieldRef<"ContactPageContent", 'String'>
    readonly successful_text: FieldRef<"ContactPageContent", 'String'>
    readonly error_text: FieldRef<"ContactPageContent", 'String'>
    readonly createdAt: FieldRef<"ContactPageContent", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactPageContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactPageContent findUnique
   */
  export type ContactPageContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPageContent
     */
    select?: ContactPageContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPageContent
     */
    omit?: ContactPageContentOmit<ExtArgs> | null
    /**
     * Filter, which ContactPageContent to fetch.
     */
    where: ContactPageContentWhereUniqueInput
  }

  /**
   * ContactPageContent findUniqueOrThrow
   */
  export type ContactPageContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPageContent
     */
    select?: ContactPageContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPageContent
     */
    omit?: ContactPageContentOmit<ExtArgs> | null
    /**
     * Filter, which ContactPageContent to fetch.
     */
    where: ContactPageContentWhereUniqueInput
  }

  /**
   * ContactPageContent findFirst
   */
  export type ContactPageContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPageContent
     */
    select?: ContactPageContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPageContent
     */
    omit?: ContactPageContentOmit<ExtArgs> | null
    /**
     * Filter, which ContactPageContent to fetch.
     */
    where?: ContactPageContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPageContents to fetch.
     */
    orderBy?: ContactPageContentOrderByWithRelationInput | ContactPageContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactPageContents.
     */
    cursor?: ContactPageContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPageContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPageContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactPageContents.
     */
    distinct?: ContactPageContentScalarFieldEnum | ContactPageContentScalarFieldEnum[]
  }

  /**
   * ContactPageContent findFirstOrThrow
   */
  export type ContactPageContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPageContent
     */
    select?: ContactPageContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPageContent
     */
    omit?: ContactPageContentOmit<ExtArgs> | null
    /**
     * Filter, which ContactPageContent to fetch.
     */
    where?: ContactPageContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPageContents to fetch.
     */
    orderBy?: ContactPageContentOrderByWithRelationInput | ContactPageContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactPageContents.
     */
    cursor?: ContactPageContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPageContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPageContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactPageContents.
     */
    distinct?: ContactPageContentScalarFieldEnum | ContactPageContentScalarFieldEnum[]
  }

  /**
   * ContactPageContent findMany
   */
  export type ContactPageContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPageContent
     */
    select?: ContactPageContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPageContent
     */
    omit?: ContactPageContentOmit<ExtArgs> | null
    /**
     * Filter, which ContactPageContents to fetch.
     */
    where?: ContactPageContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPageContents to fetch.
     */
    orderBy?: ContactPageContentOrderByWithRelationInput | ContactPageContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactPageContents.
     */
    cursor?: ContactPageContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPageContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPageContents.
     */
    skip?: number
    distinct?: ContactPageContentScalarFieldEnum | ContactPageContentScalarFieldEnum[]
  }

  /**
   * ContactPageContent create
   */
  export type ContactPageContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPageContent
     */
    select?: ContactPageContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPageContent
     */
    omit?: ContactPageContentOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactPageContent.
     */
    data: XOR<ContactPageContentCreateInput, ContactPageContentUncheckedCreateInput>
  }

  /**
   * ContactPageContent createMany
   */
  export type ContactPageContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactPageContents.
     */
    data: ContactPageContentCreateManyInput | ContactPageContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactPageContent createManyAndReturn
   */
  export type ContactPageContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPageContent
     */
    select?: ContactPageContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPageContent
     */
    omit?: ContactPageContentOmit<ExtArgs> | null
    /**
     * The data used to create many ContactPageContents.
     */
    data: ContactPageContentCreateManyInput | ContactPageContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactPageContent update
   */
  export type ContactPageContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPageContent
     */
    select?: ContactPageContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPageContent
     */
    omit?: ContactPageContentOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactPageContent.
     */
    data: XOR<ContactPageContentUpdateInput, ContactPageContentUncheckedUpdateInput>
    /**
     * Choose, which ContactPageContent to update.
     */
    where: ContactPageContentWhereUniqueInput
  }

  /**
   * ContactPageContent updateMany
   */
  export type ContactPageContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactPageContents.
     */
    data: XOR<ContactPageContentUpdateManyMutationInput, ContactPageContentUncheckedUpdateManyInput>
    /**
     * Filter which ContactPageContents to update
     */
    where?: ContactPageContentWhereInput
    /**
     * Limit how many ContactPageContents to update.
     */
    limit?: number
  }

  /**
   * ContactPageContent updateManyAndReturn
   */
  export type ContactPageContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPageContent
     */
    select?: ContactPageContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPageContent
     */
    omit?: ContactPageContentOmit<ExtArgs> | null
    /**
     * The data used to update ContactPageContents.
     */
    data: XOR<ContactPageContentUpdateManyMutationInput, ContactPageContentUncheckedUpdateManyInput>
    /**
     * Filter which ContactPageContents to update
     */
    where?: ContactPageContentWhereInput
    /**
     * Limit how many ContactPageContents to update.
     */
    limit?: number
  }

  /**
   * ContactPageContent upsert
   */
  export type ContactPageContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPageContent
     */
    select?: ContactPageContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPageContent
     */
    omit?: ContactPageContentOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactPageContent to update in case it exists.
     */
    where: ContactPageContentWhereUniqueInput
    /**
     * In case the ContactPageContent found by the `where` argument doesn't exist, create a new ContactPageContent with this data.
     */
    create: XOR<ContactPageContentCreateInput, ContactPageContentUncheckedCreateInput>
    /**
     * In case the ContactPageContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactPageContentUpdateInput, ContactPageContentUncheckedUpdateInput>
  }

  /**
   * ContactPageContent delete
   */
  export type ContactPageContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPageContent
     */
    select?: ContactPageContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPageContent
     */
    omit?: ContactPageContentOmit<ExtArgs> | null
    /**
     * Filter which ContactPageContent to delete.
     */
    where: ContactPageContentWhereUniqueInput
  }

  /**
   * ContactPageContent deleteMany
   */
  export type ContactPageContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactPageContents to delete
     */
    where?: ContactPageContentWhereInput
    /**
     * Limit how many ContactPageContents to delete.
     */
    limit?: number
  }

  /**
   * ContactPageContent without action
   */
  export type ContactPageContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPageContent
     */
    select?: ContactPageContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPageContent
     */
    omit?: ContactPageContentOmit<ExtArgs> | null
  }


  /**
   * Model FooterLabel
   */

  export type AggregateFooterLabel = {
    _count: FooterLabelCountAggregateOutputType | null
    _min: FooterLabelMinAggregateOutputType | null
    _max: FooterLabelMaxAggregateOutputType | null
  }

  export type FooterLabelMinAggregateOutputType = {
    id: string | null
    lang: string | null
    title: string | null
    credit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FooterLabelMaxAggregateOutputType = {
    id: string | null
    lang: string | null
    title: string | null
    credit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FooterLabelCountAggregateOutputType = {
    id: number
    lang: number
    title: number
    credit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FooterLabelMinAggregateInputType = {
    id?: true
    lang?: true
    title?: true
    credit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FooterLabelMaxAggregateInputType = {
    id?: true
    lang?: true
    title?: true
    credit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FooterLabelCountAggregateInputType = {
    id?: true
    lang?: true
    title?: true
    credit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FooterLabelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FooterLabel to aggregate.
     */
    where?: FooterLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FooterLabels to fetch.
     */
    orderBy?: FooterLabelOrderByWithRelationInput | FooterLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FooterLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FooterLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FooterLabels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FooterLabels
    **/
    _count?: true | FooterLabelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FooterLabelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FooterLabelMaxAggregateInputType
  }

  export type GetFooterLabelAggregateType<T extends FooterLabelAggregateArgs> = {
        [P in keyof T & keyof AggregateFooterLabel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFooterLabel[P]>
      : GetScalarType<T[P], AggregateFooterLabel[P]>
  }




  export type FooterLabelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FooterLabelWhereInput
    orderBy?: FooterLabelOrderByWithAggregationInput | FooterLabelOrderByWithAggregationInput[]
    by: FooterLabelScalarFieldEnum[] | FooterLabelScalarFieldEnum
    having?: FooterLabelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FooterLabelCountAggregateInputType | true
    _min?: FooterLabelMinAggregateInputType
    _max?: FooterLabelMaxAggregateInputType
  }

  export type FooterLabelGroupByOutputType = {
    id: string
    lang: string
    title: string
    credit: string
    createdAt: Date
    updatedAt: Date
    _count: FooterLabelCountAggregateOutputType | null
    _min: FooterLabelMinAggregateOutputType | null
    _max: FooterLabelMaxAggregateOutputType | null
  }

  type GetFooterLabelGroupByPayload<T extends FooterLabelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FooterLabelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FooterLabelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FooterLabelGroupByOutputType[P]>
            : GetScalarType<T[P], FooterLabelGroupByOutputType[P]>
        }
      >
    >


  export type FooterLabelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    title?: boolean
    credit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    social_links?: boolean | FooterLabel$social_linksArgs<ExtArgs>
    _count?: boolean | FooterLabelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["footerLabel"]>

  export type FooterLabelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    title?: boolean
    credit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["footerLabel"]>

  export type FooterLabelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    title?: boolean
    credit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["footerLabel"]>

  export type FooterLabelSelectScalar = {
    id?: boolean
    lang?: boolean
    title?: boolean
    credit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FooterLabelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lang" | "title" | "credit" | "createdAt" | "updatedAt", ExtArgs["result"]["footerLabel"]>
  export type FooterLabelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    social_links?: boolean | FooterLabel$social_linksArgs<ExtArgs>
    _count?: boolean | FooterLabelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FooterLabelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FooterLabelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FooterLabelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FooterLabel"
    objects: {
      social_links: Prisma.$SocialLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lang: string
      title: string
      credit: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["footerLabel"]>
    composites: {}
  }

  type FooterLabelGetPayload<S extends boolean | null | undefined | FooterLabelDefaultArgs> = $Result.GetResult<Prisma.$FooterLabelPayload, S>

  type FooterLabelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FooterLabelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FooterLabelCountAggregateInputType | true
    }

  export interface FooterLabelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FooterLabel'], meta: { name: 'FooterLabel' } }
    /**
     * Find zero or one FooterLabel that matches the filter.
     * @param {FooterLabelFindUniqueArgs} args - Arguments to find a FooterLabel
     * @example
     * // Get one FooterLabel
     * const footerLabel = await prisma.footerLabel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FooterLabelFindUniqueArgs>(args: SelectSubset<T, FooterLabelFindUniqueArgs<ExtArgs>>): Prisma__FooterLabelClient<$Result.GetResult<Prisma.$FooterLabelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FooterLabel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FooterLabelFindUniqueOrThrowArgs} args - Arguments to find a FooterLabel
     * @example
     * // Get one FooterLabel
     * const footerLabel = await prisma.footerLabel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FooterLabelFindUniqueOrThrowArgs>(args: SelectSubset<T, FooterLabelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FooterLabelClient<$Result.GetResult<Prisma.$FooterLabelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FooterLabel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterLabelFindFirstArgs} args - Arguments to find a FooterLabel
     * @example
     * // Get one FooterLabel
     * const footerLabel = await prisma.footerLabel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FooterLabelFindFirstArgs>(args?: SelectSubset<T, FooterLabelFindFirstArgs<ExtArgs>>): Prisma__FooterLabelClient<$Result.GetResult<Prisma.$FooterLabelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FooterLabel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterLabelFindFirstOrThrowArgs} args - Arguments to find a FooterLabel
     * @example
     * // Get one FooterLabel
     * const footerLabel = await prisma.footerLabel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FooterLabelFindFirstOrThrowArgs>(args?: SelectSubset<T, FooterLabelFindFirstOrThrowArgs<ExtArgs>>): Prisma__FooterLabelClient<$Result.GetResult<Prisma.$FooterLabelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FooterLabels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterLabelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FooterLabels
     * const footerLabels = await prisma.footerLabel.findMany()
     * 
     * // Get first 10 FooterLabels
     * const footerLabels = await prisma.footerLabel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const footerLabelWithIdOnly = await prisma.footerLabel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FooterLabelFindManyArgs>(args?: SelectSubset<T, FooterLabelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FooterLabelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FooterLabel.
     * @param {FooterLabelCreateArgs} args - Arguments to create a FooterLabel.
     * @example
     * // Create one FooterLabel
     * const FooterLabel = await prisma.footerLabel.create({
     *   data: {
     *     // ... data to create a FooterLabel
     *   }
     * })
     * 
     */
    create<T extends FooterLabelCreateArgs>(args: SelectSubset<T, FooterLabelCreateArgs<ExtArgs>>): Prisma__FooterLabelClient<$Result.GetResult<Prisma.$FooterLabelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FooterLabels.
     * @param {FooterLabelCreateManyArgs} args - Arguments to create many FooterLabels.
     * @example
     * // Create many FooterLabels
     * const footerLabel = await prisma.footerLabel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FooterLabelCreateManyArgs>(args?: SelectSubset<T, FooterLabelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FooterLabels and returns the data saved in the database.
     * @param {FooterLabelCreateManyAndReturnArgs} args - Arguments to create many FooterLabels.
     * @example
     * // Create many FooterLabels
     * const footerLabel = await prisma.footerLabel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FooterLabels and only return the `id`
     * const footerLabelWithIdOnly = await prisma.footerLabel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FooterLabelCreateManyAndReturnArgs>(args?: SelectSubset<T, FooterLabelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FooterLabelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FooterLabel.
     * @param {FooterLabelDeleteArgs} args - Arguments to delete one FooterLabel.
     * @example
     * // Delete one FooterLabel
     * const FooterLabel = await prisma.footerLabel.delete({
     *   where: {
     *     // ... filter to delete one FooterLabel
     *   }
     * })
     * 
     */
    delete<T extends FooterLabelDeleteArgs>(args: SelectSubset<T, FooterLabelDeleteArgs<ExtArgs>>): Prisma__FooterLabelClient<$Result.GetResult<Prisma.$FooterLabelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FooterLabel.
     * @param {FooterLabelUpdateArgs} args - Arguments to update one FooterLabel.
     * @example
     * // Update one FooterLabel
     * const footerLabel = await prisma.footerLabel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FooterLabelUpdateArgs>(args: SelectSubset<T, FooterLabelUpdateArgs<ExtArgs>>): Prisma__FooterLabelClient<$Result.GetResult<Prisma.$FooterLabelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FooterLabels.
     * @param {FooterLabelDeleteManyArgs} args - Arguments to filter FooterLabels to delete.
     * @example
     * // Delete a few FooterLabels
     * const { count } = await prisma.footerLabel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FooterLabelDeleteManyArgs>(args?: SelectSubset<T, FooterLabelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FooterLabels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterLabelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FooterLabels
     * const footerLabel = await prisma.footerLabel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FooterLabelUpdateManyArgs>(args: SelectSubset<T, FooterLabelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FooterLabels and returns the data updated in the database.
     * @param {FooterLabelUpdateManyAndReturnArgs} args - Arguments to update many FooterLabels.
     * @example
     * // Update many FooterLabels
     * const footerLabel = await prisma.footerLabel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FooterLabels and only return the `id`
     * const footerLabelWithIdOnly = await prisma.footerLabel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FooterLabelUpdateManyAndReturnArgs>(args: SelectSubset<T, FooterLabelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FooterLabelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FooterLabel.
     * @param {FooterLabelUpsertArgs} args - Arguments to update or create a FooterLabel.
     * @example
     * // Update or create a FooterLabel
     * const footerLabel = await prisma.footerLabel.upsert({
     *   create: {
     *     // ... data to create a FooterLabel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FooterLabel we want to update
     *   }
     * })
     */
    upsert<T extends FooterLabelUpsertArgs>(args: SelectSubset<T, FooterLabelUpsertArgs<ExtArgs>>): Prisma__FooterLabelClient<$Result.GetResult<Prisma.$FooterLabelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FooterLabels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterLabelCountArgs} args - Arguments to filter FooterLabels to count.
     * @example
     * // Count the number of FooterLabels
     * const count = await prisma.footerLabel.count({
     *   where: {
     *     // ... the filter for the FooterLabels we want to count
     *   }
     * })
    **/
    count<T extends FooterLabelCountArgs>(
      args?: Subset<T, FooterLabelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FooterLabelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FooterLabel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterLabelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FooterLabelAggregateArgs>(args: Subset<T, FooterLabelAggregateArgs>): Prisma.PrismaPromise<GetFooterLabelAggregateType<T>>

    /**
     * Group by FooterLabel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterLabelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FooterLabelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FooterLabelGroupByArgs['orderBy'] }
        : { orderBy?: FooterLabelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FooterLabelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFooterLabelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FooterLabel model
   */
  readonly fields: FooterLabelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FooterLabel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FooterLabelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    social_links<T extends FooterLabel$social_linksArgs<ExtArgs> = {}>(args?: Subset<T, FooterLabel$social_linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FooterLabel model
   */
  interface FooterLabelFieldRefs {
    readonly id: FieldRef<"FooterLabel", 'String'>
    readonly lang: FieldRef<"FooterLabel", 'String'>
    readonly title: FieldRef<"FooterLabel", 'String'>
    readonly credit: FieldRef<"FooterLabel", 'String'>
    readonly createdAt: FieldRef<"FooterLabel", 'DateTime'>
    readonly updatedAt: FieldRef<"FooterLabel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FooterLabel findUnique
   */
  export type FooterLabelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLabel
     */
    select?: FooterLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLabel
     */
    omit?: FooterLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLabelInclude<ExtArgs> | null
    /**
     * Filter, which FooterLabel to fetch.
     */
    where: FooterLabelWhereUniqueInput
  }

  /**
   * FooterLabel findUniqueOrThrow
   */
  export type FooterLabelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLabel
     */
    select?: FooterLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLabel
     */
    omit?: FooterLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLabelInclude<ExtArgs> | null
    /**
     * Filter, which FooterLabel to fetch.
     */
    where: FooterLabelWhereUniqueInput
  }

  /**
   * FooterLabel findFirst
   */
  export type FooterLabelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLabel
     */
    select?: FooterLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLabel
     */
    omit?: FooterLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLabelInclude<ExtArgs> | null
    /**
     * Filter, which FooterLabel to fetch.
     */
    where?: FooterLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FooterLabels to fetch.
     */
    orderBy?: FooterLabelOrderByWithRelationInput | FooterLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FooterLabels.
     */
    cursor?: FooterLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FooterLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FooterLabels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FooterLabels.
     */
    distinct?: FooterLabelScalarFieldEnum | FooterLabelScalarFieldEnum[]
  }

  /**
   * FooterLabel findFirstOrThrow
   */
  export type FooterLabelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLabel
     */
    select?: FooterLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLabel
     */
    omit?: FooterLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLabelInclude<ExtArgs> | null
    /**
     * Filter, which FooterLabel to fetch.
     */
    where?: FooterLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FooterLabels to fetch.
     */
    orderBy?: FooterLabelOrderByWithRelationInput | FooterLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FooterLabels.
     */
    cursor?: FooterLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FooterLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FooterLabels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FooterLabels.
     */
    distinct?: FooterLabelScalarFieldEnum | FooterLabelScalarFieldEnum[]
  }

  /**
   * FooterLabel findMany
   */
  export type FooterLabelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLabel
     */
    select?: FooterLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLabel
     */
    omit?: FooterLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLabelInclude<ExtArgs> | null
    /**
     * Filter, which FooterLabels to fetch.
     */
    where?: FooterLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FooterLabels to fetch.
     */
    orderBy?: FooterLabelOrderByWithRelationInput | FooterLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FooterLabels.
     */
    cursor?: FooterLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FooterLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FooterLabels.
     */
    skip?: number
    distinct?: FooterLabelScalarFieldEnum | FooterLabelScalarFieldEnum[]
  }

  /**
   * FooterLabel create
   */
  export type FooterLabelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLabel
     */
    select?: FooterLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLabel
     */
    omit?: FooterLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLabelInclude<ExtArgs> | null
    /**
     * The data needed to create a FooterLabel.
     */
    data: XOR<FooterLabelCreateInput, FooterLabelUncheckedCreateInput>
  }

  /**
   * FooterLabel createMany
   */
  export type FooterLabelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FooterLabels.
     */
    data: FooterLabelCreateManyInput | FooterLabelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FooterLabel createManyAndReturn
   */
  export type FooterLabelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLabel
     */
    select?: FooterLabelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLabel
     */
    omit?: FooterLabelOmit<ExtArgs> | null
    /**
     * The data used to create many FooterLabels.
     */
    data: FooterLabelCreateManyInput | FooterLabelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FooterLabel update
   */
  export type FooterLabelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLabel
     */
    select?: FooterLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLabel
     */
    omit?: FooterLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLabelInclude<ExtArgs> | null
    /**
     * The data needed to update a FooterLabel.
     */
    data: XOR<FooterLabelUpdateInput, FooterLabelUncheckedUpdateInput>
    /**
     * Choose, which FooterLabel to update.
     */
    where: FooterLabelWhereUniqueInput
  }

  /**
   * FooterLabel updateMany
   */
  export type FooterLabelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FooterLabels.
     */
    data: XOR<FooterLabelUpdateManyMutationInput, FooterLabelUncheckedUpdateManyInput>
    /**
     * Filter which FooterLabels to update
     */
    where?: FooterLabelWhereInput
    /**
     * Limit how many FooterLabels to update.
     */
    limit?: number
  }

  /**
   * FooterLabel updateManyAndReturn
   */
  export type FooterLabelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLabel
     */
    select?: FooterLabelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLabel
     */
    omit?: FooterLabelOmit<ExtArgs> | null
    /**
     * The data used to update FooterLabels.
     */
    data: XOR<FooterLabelUpdateManyMutationInput, FooterLabelUncheckedUpdateManyInput>
    /**
     * Filter which FooterLabels to update
     */
    where?: FooterLabelWhereInput
    /**
     * Limit how many FooterLabels to update.
     */
    limit?: number
  }

  /**
   * FooterLabel upsert
   */
  export type FooterLabelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLabel
     */
    select?: FooterLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLabel
     */
    omit?: FooterLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLabelInclude<ExtArgs> | null
    /**
     * The filter to search for the FooterLabel to update in case it exists.
     */
    where: FooterLabelWhereUniqueInput
    /**
     * In case the FooterLabel found by the `where` argument doesn't exist, create a new FooterLabel with this data.
     */
    create: XOR<FooterLabelCreateInput, FooterLabelUncheckedCreateInput>
    /**
     * In case the FooterLabel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FooterLabelUpdateInput, FooterLabelUncheckedUpdateInput>
  }

  /**
   * FooterLabel delete
   */
  export type FooterLabelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLabel
     */
    select?: FooterLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLabel
     */
    omit?: FooterLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLabelInclude<ExtArgs> | null
    /**
     * Filter which FooterLabel to delete.
     */
    where: FooterLabelWhereUniqueInput
  }

  /**
   * FooterLabel deleteMany
   */
  export type FooterLabelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FooterLabels to delete
     */
    where?: FooterLabelWhereInput
    /**
     * Limit how many FooterLabels to delete.
     */
    limit?: number
  }

  /**
   * FooterLabel.social_links
   */
  export type FooterLabel$social_linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    where?: SocialLinkWhereInput
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    cursor?: SocialLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * FooterLabel without action
   */
  export type FooterLabelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterLabel
     */
    select?: FooterLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterLabel
     */
    omit?: FooterLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FooterLabelInclude<ExtArgs> | null
  }


  /**
   * Model HomePagePackage
   */

  export type AggregateHomePagePackage = {
    _count: HomePagePackageCountAggregateOutputType | null
    _min: HomePagePackageMinAggregateOutputType | null
    _max: HomePagePackageMaxAggregateOutputType | null
  }

  export type HomePagePackageMinAggregateOutputType = {
    id: string | null
    lang: string | null
    discount: string | null
    image: string | null
    title: string | null
    price: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomePagePackageMaxAggregateOutputType = {
    id: string | null
    lang: string | null
    discount: string | null
    image: string | null
    title: string | null
    price: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomePagePackageCountAggregateOutputType = {
    id: number
    lang: number
    discount: number
    image: number
    title: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HomePagePackageMinAggregateInputType = {
    id?: true
    lang?: true
    discount?: true
    image?: true
    title?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomePagePackageMaxAggregateInputType = {
    id?: true
    lang?: true
    discount?: true
    image?: true
    title?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomePagePackageCountAggregateInputType = {
    id?: true
    lang?: true
    discount?: true
    image?: true
    title?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HomePagePackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomePagePackage to aggregate.
     */
    where?: HomePagePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomePagePackages to fetch.
     */
    orderBy?: HomePagePackageOrderByWithRelationInput | HomePagePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomePagePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomePagePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomePagePackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HomePagePackages
    **/
    _count?: true | HomePagePackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomePagePackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomePagePackageMaxAggregateInputType
  }

  export type GetHomePagePackageAggregateType<T extends HomePagePackageAggregateArgs> = {
        [P in keyof T & keyof AggregateHomePagePackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomePagePackage[P]>
      : GetScalarType<T[P], AggregateHomePagePackage[P]>
  }




  export type HomePagePackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomePagePackageWhereInput
    orderBy?: HomePagePackageOrderByWithAggregationInput | HomePagePackageOrderByWithAggregationInput[]
    by: HomePagePackageScalarFieldEnum[] | HomePagePackageScalarFieldEnum
    having?: HomePagePackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomePagePackageCountAggregateInputType | true
    _min?: HomePagePackageMinAggregateInputType
    _max?: HomePagePackageMaxAggregateInputType
  }

  export type HomePagePackageGroupByOutputType = {
    id: string
    lang: string
    discount: string
    image: string
    title: string
    price: string
    createdAt: Date
    updatedAt: Date
    _count: HomePagePackageCountAggregateOutputType | null
    _min: HomePagePackageMinAggregateOutputType | null
    _max: HomePagePackageMaxAggregateOutputType | null
  }

  type GetHomePagePackageGroupByPayload<T extends HomePagePackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomePagePackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomePagePackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomePagePackageGroupByOutputType[P]>
            : GetScalarType<T[P], HomePagePackageGroupByOutputType[P]>
        }
      >
    >


  export type HomePagePackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    discount?: boolean
    image?: boolean
    title?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homePagePackage"]>

  export type HomePagePackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    discount?: boolean
    image?: boolean
    title?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homePagePackage"]>

  export type HomePagePackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    discount?: boolean
    image?: boolean
    title?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homePagePackage"]>

  export type HomePagePackageSelectScalar = {
    id?: boolean
    lang?: boolean
    discount?: boolean
    image?: boolean
    title?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HomePagePackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lang" | "discount" | "image" | "title" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["homePagePackage"]>

  export type $HomePagePackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HomePagePackage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lang: string
      discount: string
      image: string
      title: string
      price: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["homePagePackage"]>
    composites: {}
  }

  type HomePagePackageGetPayload<S extends boolean | null | undefined | HomePagePackageDefaultArgs> = $Result.GetResult<Prisma.$HomePagePackagePayload, S>

  type HomePagePackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HomePagePackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HomePagePackageCountAggregateInputType | true
    }

  export interface HomePagePackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HomePagePackage'], meta: { name: 'HomePagePackage' } }
    /**
     * Find zero or one HomePagePackage that matches the filter.
     * @param {HomePagePackageFindUniqueArgs} args - Arguments to find a HomePagePackage
     * @example
     * // Get one HomePagePackage
     * const homePagePackage = await prisma.homePagePackage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HomePagePackageFindUniqueArgs>(args: SelectSubset<T, HomePagePackageFindUniqueArgs<ExtArgs>>): Prisma__HomePagePackageClient<$Result.GetResult<Prisma.$HomePagePackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HomePagePackage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HomePagePackageFindUniqueOrThrowArgs} args - Arguments to find a HomePagePackage
     * @example
     * // Get one HomePagePackage
     * const homePagePackage = await prisma.homePagePackage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HomePagePackageFindUniqueOrThrowArgs>(args: SelectSubset<T, HomePagePackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HomePagePackageClient<$Result.GetResult<Prisma.$HomePagePackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomePagePackage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomePagePackageFindFirstArgs} args - Arguments to find a HomePagePackage
     * @example
     * // Get one HomePagePackage
     * const homePagePackage = await prisma.homePagePackage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HomePagePackageFindFirstArgs>(args?: SelectSubset<T, HomePagePackageFindFirstArgs<ExtArgs>>): Prisma__HomePagePackageClient<$Result.GetResult<Prisma.$HomePagePackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomePagePackage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomePagePackageFindFirstOrThrowArgs} args - Arguments to find a HomePagePackage
     * @example
     * // Get one HomePagePackage
     * const homePagePackage = await prisma.homePagePackage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HomePagePackageFindFirstOrThrowArgs>(args?: SelectSubset<T, HomePagePackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__HomePagePackageClient<$Result.GetResult<Prisma.$HomePagePackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HomePagePackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomePagePackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomePagePackages
     * const homePagePackages = await prisma.homePagePackage.findMany()
     * 
     * // Get first 10 HomePagePackages
     * const homePagePackages = await prisma.homePagePackage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homePagePackageWithIdOnly = await prisma.homePagePackage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HomePagePackageFindManyArgs>(args?: SelectSubset<T, HomePagePackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomePagePackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HomePagePackage.
     * @param {HomePagePackageCreateArgs} args - Arguments to create a HomePagePackage.
     * @example
     * // Create one HomePagePackage
     * const HomePagePackage = await prisma.homePagePackage.create({
     *   data: {
     *     // ... data to create a HomePagePackage
     *   }
     * })
     * 
     */
    create<T extends HomePagePackageCreateArgs>(args: SelectSubset<T, HomePagePackageCreateArgs<ExtArgs>>): Prisma__HomePagePackageClient<$Result.GetResult<Prisma.$HomePagePackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HomePagePackages.
     * @param {HomePagePackageCreateManyArgs} args - Arguments to create many HomePagePackages.
     * @example
     * // Create many HomePagePackages
     * const homePagePackage = await prisma.homePagePackage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HomePagePackageCreateManyArgs>(args?: SelectSubset<T, HomePagePackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HomePagePackages and returns the data saved in the database.
     * @param {HomePagePackageCreateManyAndReturnArgs} args - Arguments to create many HomePagePackages.
     * @example
     * // Create many HomePagePackages
     * const homePagePackage = await prisma.homePagePackage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HomePagePackages and only return the `id`
     * const homePagePackageWithIdOnly = await prisma.homePagePackage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HomePagePackageCreateManyAndReturnArgs>(args?: SelectSubset<T, HomePagePackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomePagePackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HomePagePackage.
     * @param {HomePagePackageDeleteArgs} args - Arguments to delete one HomePagePackage.
     * @example
     * // Delete one HomePagePackage
     * const HomePagePackage = await prisma.homePagePackage.delete({
     *   where: {
     *     // ... filter to delete one HomePagePackage
     *   }
     * })
     * 
     */
    delete<T extends HomePagePackageDeleteArgs>(args: SelectSubset<T, HomePagePackageDeleteArgs<ExtArgs>>): Prisma__HomePagePackageClient<$Result.GetResult<Prisma.$HomePagePackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HomePagePackage.
     * @param {HomePagePackageUpdateArgs} args - Arguments to update one HomePagePackage.
     * @example
     * // Update one HomePagePackage
     * const homePagePackage = await prisma.homePagePackage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HomePagePackageUpdateArgs>(args: SelectSubset<T, HomePagePackageUpdateArgs<ExtArgs>>): Prisma__HomePagePackageClient<$Result.GetResult<Prisma.$HomePagePackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HomePagePackages.
     * @param {HomePagePackageDeleteManyArgs} args - Arguments to filter HomePagePackages to delete.
     * @example
     * // Delete a few HomePagePackages
     * const { count } = await prisma.homePagePackage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HomePagePackageDeleteManyArgs>(args?: SelectSubset<T, HomePagePackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomePagePackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomePagePackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomePagePackages
     * const homePagePackage = await prisma.homePagePackage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HomePagePackageUpdateManyArgs>(args: SelectSubset<T, HomePagePackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomePagePackages and returns the data updated in the database.
     * @param {HomePagePackageUpdateManyAndReturnArgs} args - Arguments to update many HomePagePackages.
     * @example
     * // Update many HomePagePackages
     * const homePagePackage = await prisma.homePagePackage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HomePagePackages and only return the `id`
     * const homePagePackageWithIdOnly = await prisma.homePagePackage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HomePagePackageUpdateManyAndReturnArgs>(args: SelectSubset<T, HomePagePackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomePagePackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HomePagePackage.
     * @param {HomePagePackageUpsertArgs} args - Arguments to update or create a HomePagePackage.
     * @example
     * // Update or create a HomePagePackage
     * const homePagePackage = await prisma.homePagePackage.upsert({
     *   create: {
     *     // ... data to create a HomePagePackage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomePagePackage we want to update
     *   }
     * })
     */
    upsert<T extends HomePagePackageUpsertArgs>(args: SelectSubset<T, HomePagePackageUpsertArgs<ExtArgs>>): Prisma__HomePagePackageClient<$Result.GetResult<Prisma.$HomePagePackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HomePagePackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomePagePackageCountArgs} args - Arguments to filter HomePagePackages to count.
     * @example
     * // Count the number of HomePagePackages
     * const count = await prisma.homePagePackage.count({
     *   where: {
     *     // ... the filter for the HomePagePackages we want to count
     *   }
     * })
    **/
    count<T extends HomePagePackageCountArgs>(
      args?: Subset<T, HomePagePackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomePagePackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomePagePackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomePagePackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HomePagePackageAggregateArgs>(args: Subset<T, HomePagePackageAggregateArgs>): Prisma.PrismaPromise<GetHomePagePackageAggregateType<T>>

    /**
     * Group by HomePagePackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomePagePackageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HomePagePackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomePagePackageGroupByArgs['orderBy'] }
        : { orderBy?: HomePagePackageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HomePagePackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomePagePackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HomePagePackage model
   */
  readonly fields: HomePagePackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HomePagePackage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HomePagePackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HomePagePackage model
   */
  interface HomePagePackageFieldRefs {
    readonly id: FieldRef<"HomePagePackage", 'String'>
    readonly lang: FieldRef<"HomePagePackage", 'String'>
    readonly discount: FieldRef<"HomePagePackage", 'String'>
    readonly image: FieldRef<"HomePagePackage", 'String'>
    readonly title: FieldRef<"HomePagePackage", 'String'>
    readonly price: FieldRef<"HomePagePackage", 'String'>
    readonly createdAt: FieldRef<"HomePagePackage", 'DateTime'>
    readonly updatedAt: FieldRef<"HomePagePackage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HomePagePackage findUnique
   */
  export type HomePagePackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackage
     */
    select?: HomePagePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackage
     */
    omit?: HomePagePackageOmit<ExtArgs> | null
    /**
     * Filter, which HomePagePackage to fetch.
     */
    where: HomePagePackageWhereUniqueInput
  }

  /**
   * HomePagePackage findUniqueOrThrow
   */
  export type HomePagePackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackage
     */
    select?: HomePagePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackage
     */
    omit?: HomePagePackageOmit<ExtArgs> | null
    /**
     * Filter, which HomePagePackage to fetch.
     */
    where: HomePagePackageWhereUniqueInput
  }

  /**
   * HomePagePackage findFirst
   */
  export type HomePagePackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackage
     */
    select?: HomePagePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackage
     */
    omit?: HomePagePackageOmit<ExtArgs> | null
    /**
     * Filter, which HomePagePackage to fetch.
     */
    where?: HomePagePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomePagePackages to fetch.
     */
    orderBy?: HomePagePackageOrderByWithRelationInput | HomePagePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomePagePackages.
     */
    cursor?: HomePagePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomePagePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomePagePackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomePagePackages.
     */
    distinct?: HomePagePackageScalarFieldEnum | HomePagePackageScalarFieldEnum[]
  }

  /**
   * HomePagePackage findFirstOrThrow
   */
  export type HomePagePackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackage
     */
    select?: HomePagePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackage
     */
    omit?: HomePagePackageOmit<ExtArgs> | null
    /**
     * Filter, which HomePagePackage to fetch.
     */
    where?: HomePagePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomePagePackages to fetch.
     */
    orderBy?: HomePagePackageOrderByWithRelationInput | HomePagePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomePagePackages.
     */
    cursor?: HomePagePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomePagePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomePagePackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomePagePackages.
     */
    distinct?: HomePagePackageScalarFieldEnum | HomePagePackageScalarFieldEnum[]
  }

  /**
   * HomePagePackage findMany
   */
  export type HomePagePackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackage
     */
    select?: HomePagePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackage
     */
    omit?: HomePagePackageOmit<ExtArgs> | null
    /**
     * Filter, which HomePagePackages to fetch.
     */
    where?: HomePagePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomePagePackages to fetch.
     */
    orderBy?: HomePagePackageOrderByWithRelationInput | HomePagePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HomePagePackages.
     */
    cursor?: HomePagePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomePagePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomePagePackages.
     */
    skip?: number
    distinct?: HomePagePackageScalarFieldEnum | HomePagePackageScalarFieldEnum[]
  }

  /**
   * HomePagePackage create
   */
  export type HomePagePackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackage
     */
    select?: HomePagePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackage
     */
    omit?: HomePagePackageOmit<ExtArgs> | null
    /**
     * The data needed to create a HomePagePackage.
     */
    data: XOR<HomePagePackageCreateInput, HomePagePackageUncheckedCreateInput>
  }

  /**
   * HomePagePackage createMany
   */
  export type HomePagePackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HomePagePackages.
     */
    data: HomePagePackageCreateManyInput | HomePagePackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HomePagePackage createManyAndReturn
   */
  export type HomePagePackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackage
     */
    select?: HomePagePackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackage
     */
    omit?: HomePagePackageOmit<ExtArgs> | null
    /**
     * The data used to create many HomePagePackages.
     */
    data: HomePagePackageCreateManyInput | HomePagePackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HomePagePackage update
   */
  export type HomePagePackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackage
     */
    select?: HomePagePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackage
     */
    omit?: HomePagePackageOmit<ExtArgs> | null
    /**
     * The data needed to update a HomePagePackage.
     */
    data: XOR<HomePagePackageUpdateInput, HomePagePackageUncheckedUpdateInput>
    /**
     * Choose, which HomePagePackage to update.
     */
    where: HomePagePackageWhereUniqueInput
  }

  /**
   * HomePagePackage updateMany
   */
  export type HomePagePackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HomePagePackages.
     */
    data: XOR<HomePagePackageUpdateManyMutationInput, HomePagePackageUncheckedUpdateManyInput>
    /**
     * Filter which HomePagePackages to update
     */
    where?: HomePagePackageWhereInput
    /**
     * Limit how many HomePagePackages to update.
     */
    limit?: number
  }

  /**
   * HomePagePackage updateManyAndReturn
   */
  export type HomePagePackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackage
     */
    select?: HomePagePackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackage
     */
    omit?: HomePagePackageOmit<ExtArgs> | null
    /**
     * The data used to update HomePagePackages.
     */
    data: XOR<HomePagePackageUpdateManyMutationInput, HomePagePackageUncheckedUpdateManyInput>
    /**
     * Filter which HomePagePackages to update
     */
    where?: HomePagePackageWhereInput
    /**
     * Limit how many HomePagePackages to update.
     */
    limit?: number
  }

  /**
   * HomePagePackage upsert
   */
  export type HomePagePackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackage
     */
    select?: HomePagePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackage
     */
    omit?: HomePagePackageOmit<ExtArgs> | null
    /**
     * The filter to search for the HomePagePackage to update in case it exists.
     */
    where: HomePagePackageWhereUniqueInput
    /**
     * In case the HomePagePackage found by the `where` argument doesn't exist, create a new HomePagePackage with this data.
     */
    create: XOR<HomePagePackageCreateInput, HomePagePackageUncheckedCreateInput>
    /**
     * In case the HomePagePackage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomePagePackageUpdateInput, HomePagePackageUncheckedUpdateInput>
  }

  /**
   * HomePagePackage delete
   */
  export type HomePagePackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackage
     */
    select?: HomePagePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackage
     */
    omit?: HomePagePackageOmit<ExtArgs> | null
    /**
     * Filter which HomePagePackage to delete.
     */
    where: HomePagePackageWhereUniqueInput
  }

  /**
   * HomePagePackage deleteMany
   */
  export type HomePagePackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomePagePackages to delete
     */
    where?: HomePagePackageWhereInput
    /**
     * Limit how many HomePagePackages to delete.
     */
    limit?: number
  }

  /**
   * HomePagePackage without action
   */
  export type HomePagePackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackage
     */
    select?: HomePagePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackage
     */
    omit?: HomePagePackageOmit<ExtArgs> | null
  }


  /**
   * Model HomePagePackagesHeading
   */

  export type AggregateHomePagePackagesHeading = {
    _count: HomePagePackagesHeadingCountAggregateOutputType | null
    _min: HomePagePackagesHeadingMinAggregateOutputType | null
    _max: HomePagePackagesHeadingMaxAggregateOutputType | null
  }

  export type HomePagePackagesHeadingMinAggregateOutputType = {
    id: string | null
    lang: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomePagePackagesHeadingMaxAggregateOutputType = {
    id: string | null
    lang: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomePagePackagesHeadingCountAggregateOutputType = {
    id: number
    lang: number
    title: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HomePagePackagesHeadingMinAggregateInputType = {
    id?: true
    lang?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomePagePackagesHeadingMaxAggregateInputType = {
    id?: true
    lang?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomePagePackagesHeadingCountAggregateInputType = {
    id?: true
    lang?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HomePagePackagesHeadingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomePagePackagesHeading to aggregate.
     */
    where?: HomePagePackagesHeadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomePagePackagesHeadings to fetch.
     */
    orderBy?: HomePagePackagesHeadingOrderByWithRelationInput | HomePagePackagesHeadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomePagePackagesHeadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomePagePackagesHeadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomePagePackagesHeadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HomePagePackagesHeadings
    **/
    _count?: true | HomePagePackagesHeadingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomePagePackagesHeadingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomePagePackagesHeadingMaxAggregateInputType
  }

  export type GetHomePagePackagesHeadingAggregateType<T extends HomePagePackagesHeadingAggregateArgs> = {
        [P in keyof T & keyof AggregateHomePagePackagesHeading]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomePagePackagesHeading[P]>
      : GetScalarType<T[P], AggregateHomePagePackagesHeading[P]>
  }




  export type HomePagePackagesHeadingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomePagePackagesHeadingWhereInput
    orderBy?: HomePagePackagesHeadingOrderByWithAggregationInput | HomePagePackagesHeadingOrderByWithAggregationInput[]
    by: HomePagePackagesHeadingScalarFieldEnum[] | HomePagePackagesHeadingScalarFieldEnum
    having?: HomePagePackagesHeadingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomePagePackagesHeadingCountAggregateInputType | true
    _min?: HomePagePackagesHeadingMinAggregateInputType
    _max?: HomePagePackagesHeadingMaxAggregateInputType
  }

  export type HomePagePackagesHeadingGroupByOutputType = {
    id: string
    lang: string
    title: string
    createdAt: Date
    updatedAt: Date
    _count: HomePagePackagesHeadingCountAggregateOutputType | null
    _min: HomePagePackagesHeadingMinAggregateOutputType | null
    _max: HomePagePackagesHeadingMaxAggregateOutputType | null
  }

  type GetHomePagePackagesHeadingGroupByPayload<T extends HomePagePackagesHeadingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomePagePackagesHeadingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomePagePackagesHeadingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomePagePackagesHeadingGroupByOutputType[P]>
            : GetScalarType<T[P], HomePagePackagesHeadingGroupByOutputType[P]>
        }
      >
    >


  export type HomePagePackagesHeadingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homePagePackagesHeading"]>

  export type HomePagePackagesHeadingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homePagePackagesHeading"]>

  export type HomePagePackagesHeadingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homePagePackagesHeading"]>

  export type HomePagePackagesHeadingSelectScalar = {
    id?: boolean
    lang?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HomePagePackagesHeadingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lang" | "title" | "createdAt" | "updatedAt", ExtArgs["result"]["homePagePackagesHeading"]>

  export type $HomePagePackagesHeadingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HomePagePackagesHeading"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lang: string
      title: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["homePagePackagesHeading"]>
    composites: {}
  }

  type HomePagePackagesHeadingGetPayload<S extends boolean | null | undefined | HomePagePackagesHeadingDefaultArgs> = $Result.GetResult<Prisma.$HomePagePackagesHeadingPayload, S>

  type HomePagePackagesHeadingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HomePagePackagesHeadingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HomePagePackagesHeadingCountAggregateInputType | true
    }

  export interface HomePagePackagesHeadingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HomePagePackagesHeading'], meta: { name: 'HomePagePackagesHeading' } }
    /**
     * Find zero or one HomePagePackagesHeading that matches the filter.
     * @param {HomePagePackagesHeadingFindUniqueArgs} args - Arguments to find a HomePagePackagesHeading
     * @example
     * // Get one HomePagePackagesHeading
     * const homePagePackagesHeading = await prisma.homePagePackagesHeading.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HomePagePackagesHeadingFindUniqueArgs>(args: SelectSubset<T, HomePagePackagesHeadingFindUniqueArgs<ExtArgs>>): Prisma__HomePagePackagesHeadingClient<$Result.GetResult<Prisma.$HomePagePackagesHeadingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HomePagePackagesHeading that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HomePagePackagesHeadingFindUniqueOrThrowArgs} args - Arguments to find a HomePagePackagesHeading
     * @example
     * // Get one HomePagePackagesHeading
     * const homePagePackagesHeading = await prisma.homePagePackagesHeading.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HomePagePackagesHeadingFindUniqueOrThrowArgs>(args: SelectSubset<T, HomePagePackagesHeadingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HomePagePackagesHeadingClient<$Result.GetResult<Prisma.$HomePagePackagesHeadingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomePagePackagesHeading that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomePagePackagesHeadingFindFirstArgs} args - Arguments to find a HomePagePackagesHeading
     * @example
     * // Get one HomePagePackagesHeading
     * const homePagePackagesHeading = await prisma.homePagePackagesHeading.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HomePagePackagesHeadingFindFirstArgs>(args?: SelectSubset<T, HomePagePackagesHeadingFindFirstArgs<ExtArgs>>): Prisma__HomePagePackagesHeadingClient<$Result.GetResult<Prisma.$HomePagePackagesHeadingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomePagePackagesHeading that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomePagePackagesHeadingFindFirstOrThrowArgs} args - Arguments to find a HomePagePackagesHeading
     * @example
     * // Get one HomePagePackagesHeading
     * const homePagePackagesHeading = await prisma.homePagePackagesHeading.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HomePagePackagesHeadingFindFirstOrThrowArgs>(args?: SelectSubset<T, HomePagePackagesHeadingFindFirstOrThrowArgs<ExtArgs>>): Prisma__HomePagePackagesHeadingClient<$Result.GetResult<Prisma.$HomePagePackagesHeadingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HomePagePackagesHeadings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomePagePackagesHeadingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomePagePackagesHeadings
     * const homePagePackagesHeadings = await prisma.homePagePackagesHeading.findMany()
     * 
     * // Get first 10 HomePagePackagesHeadings
     * const homePagePackagesHeadings = await prisma.homePagePackagesHeading.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homePagePackagesHeadingWithIdOnly = await prisma.homePagePackagesHeading.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HomePagePackagesHeadingFindManyArgs>(args?: SelectSubset<T, HomePagePackagesHeadingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomePagePackagesHeadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HomePagePackagesHeading.
     * @param {HomePagePackagesHeadingCreateArgs} args - Arguments to create a HomePagePackagesHeading.
     * @example
     * // Create one HomePagePackagesHeading
     * const HomePagePackagesHeading = await prisma.homePagePackagesHeading.create({
     *   data: {
     *     // ... data to create a HomePagePackagesHeading
     *   }
     * })
     * 
     */
    create<T extends HomePagePackagesHeadingCreateArgs>(args: SelectSubset<T, HomePagePackagesHeadingCreateArgs<ExtArgs>>): Prisma__HomePagePackagesHeadingClient<$Result.GetResult<Prisma.$HomePagePackagesHeadingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HomePagePackagesHeadings.
     * @param {HomePagePackagesHeadingCreateManyArgs} args - Arguments to create many HomePagePackagesHeadings.
     * @example
     * // Create many HomePagePackagesHeadings
     * const homePagePackagesHeading = await prisma.homePagePackagesHeading.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HomePagePackagesHeadingCreateManyArgs>(args?: SelectSubset<T, HomePagePackagesHeadingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HomePagePackagesHeadings and returns the data saved in the database.
     * @param {HomePagePackagesHeadingCreateManyAndReturnArgs} args - Arguments to create many HomePagePackagesHeadings.
     * @example
     * // Create many HomePagePackagesHeadings
     * const homePagePackagesHeading = await prisma.homePagePackagesHeading.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HomePagePackagesHeadings and only return the `id`
     * const homePagePackagesHeadingWithIdOnly = await prisma.homePagePackagesHeading.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HomePagePackagesHeadingCreateManyAndReturnArgs>(args?: SelectSubset<T, HomePagePackagesHeadingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomePagePackagesHeadingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HomePagePackagesHeading.
     * @param {HomePagePackagesHeadingDeleteArgs} args - Arguments to delete one HomePagePackagesHeading.
     * @example
     * // Delete one HomePagePackagesHeading
     * const HomePagePackagesHeading = await prisma.homePagePackagesHeading.delete({
     *   where: {
     *     // ... filter to delete one HomePagePackagesHeading
     *   }
     * })
     * 
     */
    delete<T extends HomePagePackagesHeadingDeleteArgs>(args: SelectSubset<T, HomePagePackagesHeadingDeleteArgs<ExtArgs>>): Prisma__HomePagePackagesHeadingClient<$Result.GetResult<Prisma.$HomePagePackagesHeadingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HomePagePackagesHeading.
     * @param {HomePagePackagesHeadingUpdateArgs} args - Arguments to update one HomePagePackagesHeading.
     * @example
     * // Update one HomePagePackagesHeading
     * const homePagePackagesHeading = await prisma.homePagePackagesHeading.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HomePagePackagesHeadingUpdateArgs>(args: SelectSubset<T, HomePagePackagesHeadingUpdateArgs<ExtArgs>>): Prisma__HomePagePackagesHeadingClient<$Result.GetResult<Prisma.$HomePagePackagesHeadingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HomePagePackagesHeadings.
     * @param {HomePagePackagesHeadingDeleteManyArgs} args - Arguments to filter HomePagePackagesHeadings to delete.
     * @example
     * // Delete a few HomePagePackagesHeadings
     * const { count } = await prisma.homePagePackagesHeading.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HomePagePackagesHeadingDeleteManyArgs>(args?: SelectSubset<T, HomePagePackagesHeadingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomePagePackagesHeadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomePagePackagesHeadingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomePagePackagesHeadings
     * const homePagePackagesHeading = await prisma.homePagePackagesHeading.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HomePagePackagesHeadingUpdateManyArgs>(args: SelectSubset<T, HomePagePackagesHeadingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomePagePackagesHeadings and returns the data updated in the database.
     * @param {HomePagePackagesHeadingUpdateManyAndReturnArgs} args - Arguments to update many HomePagePackagesHeadings.
     * @example
     * // Update many HomePagePackagesHeadings
     * const homePagePackagesHeading = await prisma.homePagePackagesHeading.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HomePagePackagesHeadings and only return the `id`
     * const homePagePackagesHeadingWithIdOnly = await prisma.homePagePackagesHeading.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HomePagePackagesHeadingUpdateManyAndReturnArgs>(args: SelectSubset<T, HomePagePackagesHeadingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomePagePackagesHeadingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HomePagePackagesHeading.
     * @param {HomePagePackagesHeadingUpsertArgs} args - Arguments to update or create a HomePagePackagesHeading.
     * @example
     * // Update or create a HomePagePackagesHeading
     * const homePagePackagesHeading = await prisma.homePagePackagesHeading.upsert({
     *   create: {
     *     // ... data to create a HomePagePackagesHeading
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomePagePackagesHeading we want to update
     *   }
     * })
     */
    upsert<T extends HomePagePackagesHeadingUpsertArgs>(args: SelectSubset<T, HomePagePackagesHeadingUpsertArgs<ExtArgs>>): Prisma__HomePagePackagesHeadingClient<$Result.GetResult<Prisma.$HomePagePackagesHeadingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HomePagePackagesHeadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomePagePackagesHeadingCountArgs} args - Arguments to filter HomePagePackagesHeadings to count.
     * @example
     * // Count the number of HomePagePackagesHeadings
     * const count = await prisma.homePagePackagesHeading.count({
     *   where: {
     *     // ... the filter for the HomePagePackagesHeadings we want to count
     *   }
     * })
    **/
    count<T extends HomePagePackagesHeadingCountArgs>(
      args?: Subset<T, HomePagePackagesHeadingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomePagePackagesHeadingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomePagePackagesHeading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomePagePackagesHeadingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HomePagePackagesHeadingAggregateArgs>(args: Subset<T, HomePagePackagesHeadingAggregateArgs>): Prisma.PrismaPromise<GetHomePagePackagesHeadingAggregateType<T>>

    /**
     * Group by HomePagePackagesHeading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomePagePackagesHeadingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HomePagePackagesHeadingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomePagePackagesHeadingGroupByArgs['orderBy'] }
        : { orderBy?: HomePagePackagesHeadingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HomePagePackagesHeadingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomePagePackagesHeadingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HomePagePackagesHeading model
   */
  readonly fields: HomePagePackagesHeadingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HomePagePackagesHeading.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HomePagePackagesHeadingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HomePagePackagesHeading model
   */
  interface HomePagePackagesHeadingFieldRefs {
    readonly id: FieldRef<"HomePagePackagesHeading", 'String'>
    readonly lang: FieldRef<"HomePagePackagesHeading", 'String'>
    readonly title: FieldRef<"HomePagePackagesHeading", 'String'>
    readonly createdAt: FieldRef<"HomePagePackagesHeading", 'DateTime'>
    readonly updatedAt: FieldRef<"HomePagePackagesHeading", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HomePagePackagesHeading findUnique
   */
  export type HomePagePackagesHeadingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackagesHeading
     */
    select?: HomePagePackagesHeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackagesHeading
     */
    omit?: HomePagePackagesHeadingOmit<ExtArgs> | null
    /**
     * Filter, which HomePagePackagesHeading to fetch.
     */
    where: HomePagePackagesHeadingWhereUniqueInput
  }

  /**
   * HomePagePackagesHeading findUniqueOrThrow
   */
  export type HomePagePackagesHeadingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackagesHeading
     */
    select?: HomePagePackagesHeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackagesHeading
     */
    omit?: HomePagePackagesHeadingOmit<ExtArgs> | null
    /**
     * Filter, which HomePagePackagesHeading to fetch.
     */
    where: HomePagePackagesHeadingWhereUniqueInput
  }

  /**
   * HomePagePackagesHeading findFirst
   */
  export type HomePagePackagesHeadingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackagesHeading
     */
    select?: HomePagePackagesHeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackagesHeading
     */
    omit?: HomePagePackagesHeadingOmit<ExtArgs> | null
    /**
     * Filter, which HomePagePackagesHeading to fetch.
     */
    where?: HomePagePackagesHeadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomePagePackagesHeadings to fetch.
     */
    orderBy?: HomePagePackagesHeadingOrderByWithRelationInput | HomePagePackagesHeadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomePagePackagesHeadings.
     */
    cursor?: HomePagePackagesHeadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomePagePackagesHeadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomePagePackagesHeadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomePagePackagesHeadings.
     */
    distinct?: HomePagePackagesHeadingScalarFieldEnum | HomePagePackagesHeadingScalarFieldEnum[]
  }

  /**
   * HomePagePackagesHeading findFirstOrThrow
   */
  export type HomePagePackagesHeadingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackagesHeading
     */
    select?: HomePagePackagesHeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackagesHeading
     */
    omit?: HomePagePackagesHeadingOmit<ExtArgs> | null
    /**
     * Filter, which HomePagePackagesHeading to fetch.
     */
    where?: HomePagePackagesHeadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomePagePackagesHeadings to fetch.
     */
    orderBy?: HomePagePackagesHeadingOrderByWithRelationInput | HomePagePackagesHeadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomePagePackagesHeadings.
     */
    cursor?: HomePagePackagesHeadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomePagePackagesHeadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomePagePackagesHeadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomePagePackagesHeadings.
     */
    distinct?: HomePagePackagesHeadingScalarFieldEnum | HomePagePackagesHeadingScalarFieldEnum[]
  }

  /**
   * HomePagePackagesHeading findMany
   */
  export type HomePagePackagesHeadingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackagesHeading
     */
    select?: HomePagePackagesHeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackagesHeading
     */
    omit?: HomePagePackagesHeadingOmit<ExtArgs> | null
    /**
     * Filter, which HomePagePackagesHeadings to fetch.
     */
    where?: HomePagePackagesHeadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomePagePackagesHeadings to fetch.
     */
    orderBy?: HomePagePackagesHeadingOrderByWithRelationInput | HomePagePackagesHeadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HomePagePackagesHeadings.
     */
    cursor?: HomePagePackagesHeadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomePagePackagesHeadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomePagePackagesHeadings.
     */
    skip?: number
    distinct?: HomePagePackagesHeadingScalarFieldEnum | HomePagePackagesHeadingScalarFieldEnum[]
  }

  /**
   * HomePagePackagesHeading create
   */
  export type HomePagePackagesHeadingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackagesHeading
     */
    select?: HomePagePackagesHeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackagesHeading
     */
    omit?: HomePagePackagesHeadingOmit<ExtArgs> | null
    /**
     * The data needed to create a HomePagePackagesHeading.
     */
    data: XOR<HomePagePackagesHeadingCreateInput, HomePagePackagesHeadingUncheckedCreateInput>
  }

  /**
   * HomePagePackagesHeading createMany
   */
  export type HomePagePackagesHeadingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HomePagePackagesHeadings.
     */
    data: HomePagePackagesHeadingCreateManyInput | HomePagePackagesHeadingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HomePagePackagesHeading createManyAndReturn
   */
  export type HomePagePackagesHeadingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackagesHeading
     */
    select?: HomePagePackagesHeadingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackagesHeading
     */
    omit?: HomePagePackagesHeadingOmit<ExtArgs> | null
    /**
     * The data used to create many HomePagePackagesHeadings.
     */
    data: HomePagePackagesHeadingCreateManyInput | HomePagePackagesHeadingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HomePagePackagesHeading update
   */
  export type HomePagePackagesHeadingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackagesHeading
     */
    select?: HomePagePackagesHeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackagesHeading
     */
    omit?: HomePagePackagesHeadingOmit<ExtArgs> | null
    /**
     * The data needed to update a HomePagePackagesHeading.
     */
    data: XOR<HomePagePackagesHeadingUpdateInput, HomePagePackagesHeadingUncheckedUpdateInput>
    /**
     * Choose, which HomePagePackagesHeading to update.
     */
    where: HomePagePackagesHeadingWhereUniqueInput
  }

  /**
   * HomePagePackagesHeading updateMany
   */
  export type HomePagePackagesHeadingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HomePagePackagesHeadings.
     */
    data: XOR<HomePagePackagesHeadingUpdateManyMutationInput, HomePagePackagesHeadingUncheckedUpdateManyInput>
    /**
     * Filter which HomePagePackagesHeadings to update
     */
    where?: HomePagePackagesHeadingWhereInput
    /**
     * Limit how many HomePagePackagesHeadings to update.
     */
    limit?: number
  }

  /**
   * HomePagePackagesHeading updateManyAndReturn
   */
  export type HomePagePackagesHeadingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackagesHeading
     */
    select?: HomePagePackagesHeadingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackagesHeading
     */
    omit?: HomePagePackagesHeadingOmit<ExtArgs> | null
    /**
     * The data used to update HomePagePackagesHeadings.
     */
    data: XOR<HomePagePackagesHeadingUpdateManyMutationInput, HomePagePackagesHeadingUncheckedUpdateManyInput>
    /**
     * Filter which HomePagePackagesHeadings to update
     */
    where?: HomePagePackagesHeadingWhereInput
    /**
     * Limit how many HomePagePackagesHeadings to update.
     */
    limit?: number
  }

  /**
   * HomePagePackagesHeading upsert
   */
  export type HomePagePackagesHeadingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackagesHeading
     */
    select?: HomePagePackagesHeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackagesHeading
     */
    omit?: HomePagePackagesHeadingOmit<ExtArgs> | null
    /**
     * The filter to search for the HomePagePackagesHeading to update in case it exists.
     */
    where: HomePagePackagesHeadingWhereUniqueInput
    /**
     * In case the HomePagePackagesHeading found by the `where` argument doesn't exist, create a new HomePagePackagesHeading with this data.
     */
    create: XOR<HomePagePackagesHeadingCreateInput, HomePagePackagesHeadingUncheckedCreateInput>
    /**
     * In case the HomePagePackagesHeading was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomePagePackagesHeadingUpdateInput, HomePagePackagesHeadingUncheckedUpdateInput>
  }

  /**
   * HomePagePackagesHeading delete
   */
  export type HomePagePackagesHeadingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackagesHeading
     */
    select?: HomePagePackagesHeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackagesHeading
     */
    omit?: HomePagePackagesHeadingOmit<ExtArgs> | null
    /**
     * Filter which HomePagePackagesHeading to delete.
     */
    where: HomePagePackagesHeadingWhereUniqueInput
  }

  /**
   * HomePagePackagesHeading deleteMany
   */
  export type HomePagePackagesHeadingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomePagePackagesHeadings to delete
     */
    where?: HomePagePackagesHeadingWhereInput
    /**
     * Limit how many HomePagePackagesHeadings to delete.
     */
    limit?: number
  }

  /**
   * HomePagePackagesHeading without action
   */
  export type HomePagePackagesHeadingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePagePackagesHeading
     */
    select?: HomePagePackagesHeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePagePackagesHeading
     */
    omit?: HomePagePackagesHeadingOmit<ExtArgs> | null
  }


  /**
   * Model HomePageSlider
   */

  export type AggregateHomePageSlider = {
    _count: HomePageSliderCountAggregateOutputType | null
    _min: HomePageSliderMinAggregateOutputType | null
    _max: HomePageSliderMaxAggregateOutputType | null
  }

  export type HomePageSliderMinAggregateOutputType = {
    id: string | null
    lang: string | null
    img: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomePageSliderMaxAggregateOutputType = {
    id: string | null
    lang: string | null
    img: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomePageSliderCountAggregateOutputType = {
    id: number
    lang: number
    img: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HomePageSliderMinAggregateInputType = {
    id?: true
    lang?: true
    img?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomePageSliderMaxAggregateInputType = {
    id?: true
    lang?: true
    img?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomePageSliderCountAggregateInputType = {
    id?: true
    lang?: true
    img?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HomePageSliderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomePageSlider to aggregate.
     */
    where?: HomePageSliderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomePageSliders to fetch.
     */
    orderBy?: HomePageSliderOrderByWithRelationInput | HomePageSliderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomePageSliderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomePageSliders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomePageSliders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HomePageSliders
    **/
    _count?: true | HomePageSliderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomePageSliderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomePageSliderMaxAggregateInputType
  }

  export type GetHomePageSliderAggregateType<T extends HomePageSliderAggregateArgs> = {
        [P in keyof T & keyof AggregateHomePageSlider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomePageSlider[P]>
      : GetScalarType<T[P], AggregateHomePageSlider[P]>
  }




  export type HomePageSliderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomePageSliderWhereInput
    orderBy?: HomePageSliderOrderByWithAggregationInput | HomePageSliderOrderByWithAggregationInput[]
    by: HomePageSliderScalarFieldEnum[] | HomePageSliderScalarFieldEnum
    having?: HomePageSliderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomePageSliderCountAggregateInputType | true
    _min?: HomePageSliderMinAggregateInputType
    _max?: HomePageSliderMaxAggregateInputType
  }

  export type HomePageSliderGroupByOutputType = {
    id: string
    lang: string
    img: string
    title: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: HomePageSliderCountAggregateOutputType | null
    _min: HomePageSliderMinAggregateOutputType | null
    _max: HomePageSliderMaxAggregateOutputType | null
  }

  type GetHomePageSliderGroupByPayload<T extends HomePageSliderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomePageSliderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomePageSliderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomePageSliderGroupByOutputType[P]>
            : GetScalarType<T[P], HomePageSliderGroupByOutputType[P]>
        }
      >
    >


  export type HomePageSliderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    img?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homePageSlider"]>

  export type HomePageSliderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    img?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homePageSlider"]>

  export type HomePageSliderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    img?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homePageSlider"]>

  export type HomePageSliderSelectScalar = {
    id?: boolean
    lang?: boolean
    img?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HomePageSliderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lang" | "img" | "title" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["homePageSlider"]>

  export type $HomePageSliderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HomePageSlider"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lang: string
      img: string
      title: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["homePageSlider"]>
    composites: {}
  }

  type HomePageSliderGetPayload<S extends boolean | null | undefined | HomePageSliderDefaultArgs> = $Result.GetResult<Prisma.$HomePageSliderPayload, S>

  type HomePageSliderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HomePageSliderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HomePageSliderCountAggregateInputType | true
    }

  export interface HomePageSliderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HomePageSlider'], meta: { name: 'HomePageSlider' } }
    /**
     * Find zero or one HomePageSlider that matches the filter.
     * @param {HomePageSliderFindUniqueArgs} args - Arguments to find a HomePageSlider
     * @example
     * // Get one HomePageSlider
     * const homePageSlider = await prisma.homePageSlider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HomePageSliderFindUniqueArgs>(args: SelectSubset<T, HomePageSliderFindUniqueArgs<ExtArgs>>): Prisma__HomePageSliderClient<$Result.GetResult<Prisma.$HomePageSliderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HomePageSlider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HomePageSliderFindUniqueOrThrowArgs} args - Arguments to find a HomePageSlider
     * @example
     * // Get one HomePageSlider
     * const homePageSlider = await prisma.homePageSlider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HomePageSliderFindUniqueOrThrowArgs>(args: SelectSubset<T, HomePageSliderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HomePageSliderClient<$Result.GetResult<Prisma.$HomePageSliderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomePageSlider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomePageSliderFindFirstArgs} args - Arguments to find a HomePageSlider
     * @example
     * // Get one HomePageSlider
     * const homePageSlider = await prisma.homePageSlider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HomePageSliderFindFirstArgs>(args?: SelectSubset<T, HomePageSliderFindFirstArgs<ExtArgs>>): Prisma__HomePageSliderClient<$Result.GetResult<Prisma.$HomePageSliderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomePageSlider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomePageSliderFindFirstOrThrowArgs} args - Arguments to find a HomePageSlider
     * @example
     * // Get one HomePageSlider
     * const homePageSlider = await prisma.homePageSlider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HomePageSliderFindFirstOrThrowArgs>(args?: SelectSubset<T, HomePageSliderFindFirstOrThrowArgs<ExtArgs>>): Prisma__HomePageSliderClient<$Result.GetResult<Prisma.$HomePageSliderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HomePageSliders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomePageSliderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomePageSliders
     * const homePageSliders = await prisma.homePageSlider.findMany()
     * 
     * // Get first 10 HomePageSliders
     * const homePageSliders = await prisma.homePageSlider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homePageSliderWithIdOnly = await prisma.homePageSlider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HomePageSliderFindManyArgs>(args?: SelectSubset<T, HomePageSliderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomePageSliderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HomePageSlider.
     * @param {HomePageSliderCreateArgs} args - Arguments to create a HomePageSlider.
     * @example
     * // Create one HomePageSlider
     * const HomePageSlider = await prisma.homePageSlider.create({
     *   data: {
     *     // ... data to create a HomePageSlider
     *   }
     * })
     * 
     */
    create<T extends HomePageSliderCreateArgs>(args: SelectSubset<T, HomePageSliderCreateArgs<ExtArgs>>): Prisma__HomePageSliderClient<$Result.GetResult<Prisma.$HomePageSliderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HomePageSliders.
     * @param {HomePageSliderCreateManyArgs} args - Arguments to create many HomePageSliders.
     * @example
     * // Create many HomePageSliders
     * const homePageSlider = await prisma.homePageSlider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HomePageSliderCreateManyArgs>(args?: SelectSubset<T, HomePageSliderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HomePageSliders and returns the data saved in the database.
     * @param {HomePageSliderCreateManyAndReturnArgs} args - Arguments to create many HomePageSliders.
     * @example
     * // Create many HomePageSliders
     * const homePageSlider = await prisma.homePageSlider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HomePageSliders and only return the `id`
     * const homePageSliderWithIdOnly = await prisma.homePageSlider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HomePageSliderCreateManyAndReturnArgs>(args?: SelectSubset<T, HomePageSliderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomePageSliderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HomePageSlider.
     * @param {HomePageSliderDeleteArgs} args - Arguments to delete one HomePageSlider.
     * @example
     * // Delete one HomePageSlider
     * const HomePageSlider = await prisma.homePageSlider.delete({
     *   where: {
     *     // ... filter to delete one HomePageSlider
     *   }
     * })
     * 
     */
    delete<T extends HomePageSliderDeleteArgs>(args: SelectSubset<T, HomePageSliderDeleteArgs<ExtArgs>>): Prisma__HomePageSliderClient<$Result.GetResult<Prisma.$HomePageSliderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HomePageSlider.
     * @param {HomePageSliderUpdateArgs} args - Arguments to update one HomePageSlider.
     * @example
     * // Update one HomePageSlider
     * const homePageSlider = await prisma.homePageSlider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HomePageSliderUpdateArgs>(args: SelectSubset<T, HomePageSliderUpdateArgs<ExtArgs>>): Prisma__HomePageSliderClient<$Result.GetResult<Prisma.$HomePageSliderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HomePageSliders.
     * @param {HomePageSliderDeleteManyArgs} args - Arguments to filter HomePageSliders to delete.
     * @example
     * // Delete a few HomePageSliders
     * const { count } = await prisma.homePageSlider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HomePageSliderDeleteManyArgs>(args?: SelectSubset<T, HomePageSliderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomePageSliders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomePageSliderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomePageSliders
     * const homePageSlider = await prisma.homePageSlider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HomePageSliderUpdateManyArgs>(args: SelectSubset<T, HomePageSliderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomePageSliders and returns the data updated in the database.
     * @param {HomePageSliderUpdateManyAndReturnArgs} args - Arguments to update many HomePageSliders.
     * @example
     * // Update many HomePageSliders
     * const homePageSlider = await prisma.homePageSlider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HomePageSliders and only return the `id`
     * const homePageSliderWithIdOnly = await prisma.homePageSlider.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HomePageSliderUpdateManyAndReturnArgs>(args: SelectSubset<T, HomePageSliderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomePageSliderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HomePageSlider.
     * @param {HomePageSliderUpsertArgs} args - Arguments to update or create a HomePageSlider.
     * @example
     * // Update or create a HomePageSlider
     * const homePageSlider = await prisma.homePageSlider.upsert({
     *   create: {
     *     // ... data to create a HomePageSlider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomePageSlider we want to update
     *   }
     * })
     */
    upsert<T extends HomePageSliderUpsertArgs>(args: SelectSubset<T, HomePageSliderUpsertArgs<ExtArgs>>): Prisma__HomePageSliderClient<$Result.GetResult<Prisma.$HomePageSliderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HomePageSliders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomePageSliderCountArgs} args - Arguments to filter HomePageSliders to count.
     * @example
     * // Count the number of HomePageSliders
     * const count = await prisma.homePageSlider.count({
     *   where: {
     *     // ... the filter for the HomePageSliders we want to count
     *   }
     * })
    **/
    count<T extends HomePageSliderCountArgs>(
      args?: Subset<T, HomePageSliderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomePageSliderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomePageSlider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomePageSliderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HomePageSliderAggregateArgs>(args: Subset<T, HomePageSliderAggregateArgs>): Prisma.PrismaPromise<GetHomePageSliderAggregateType<T>>

    /**
     * Group by HomePageSlider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomePageSliderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HomePageSliderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomePageSliderGroupByArgs['orderBy'] }
        : { orderBy?: HomePageSliderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HomePageSliderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomePageSliderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HomePageSlider model
   */
  readonly fields: HomePageSliderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HomePageSlider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HomePageSliderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HomePageSlider model
   */
  interface HomePageSliderFieldRefs {
    readonly id: FieldRef<"HomePageSlider", 'String'>
    readonly lang: FieldRef<"HomePageSlider", 'String'>
    readonly img: FieldRef<"HomePageSlider", 'String'>
    readonly title: FieldRef<"HomePageSlider", 'String'>
    readonly description: FieldRef<"HomePageSlider", 'String'>
    readonly createdAt: FieldRef<"HomePageSlider", 'DateTime'>
    readonly updatedAt: FieldRef<"HomePageSlider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HomePageSlider findUnique
   */
  export type HomePageSliderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePageSlider
     */
    select?: HomePageSliderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePageSlider
     */
    omit?: HomePageSliderOmit<ExtArgs> | null
    /**
     * Filter, which HomePageSlider to fetch.
     */
    where: HomePageSliderWhereUniqueInput
  }

  /**
   * HomePageSlider findUniqueOrThrow
   */
  export type HomePageSliderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePageSlider
     */
    select?: HomePageSliderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePageSlider
     */
    omit?: HomePageSliderOmit<ExtArgs> | null
    /**
     * Filter, which HomePageSlider to fetch.
     */
    where: HomePageSliderWhereUniqueInput
  }

  /**
   * HomePageSlider findFirst
   */
  export type HomePageSliderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePageSlider
     */
    select?: HomePageSliderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePageSlider
     */
    omit?: HomePageSliderOmit<ExtArgs> | null
    /**
     * Filter, which HomePageSlider to fetch.
     */
    where?: HomePageSliderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomePageSliders to fetch.
     */
    orderBy?: HomePageSliderOrderByWithRelationInput | HomePageSliderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomePageSliders.
     */
    cursor?: HomePageSliderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomePageSliders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomePageSliders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomePageSliders.
     */
    distinct?: HomePageSliderScalarFieldEnum | HomePageSliderScalarFieldEnum[]
  }

  /**
   * HomePageSlider findFirstOrThrow
   */
  export type HomePageSliderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePageSlider
     */
    select?: HomePageSliderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePageSlider
     */
    omit?: HomePageSliderOmit<ExtArgs> | null
    /**
     * Filter, which HomePageSlider to fetch.
     */
    where?: HomePageSliderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomePageSliders to fetch.
     */
    orderBy?: HomePageSliderOrderByWithRelationInput | HomePageSliderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomePageSliders.
     */
    cursor?: HomePageSliderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomePageSliders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomePageSliders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomePageSliders.
     */
    distinct?: HomePageSliderScalarFieldEnum | HomePageSliderScalarFieldEnum[]
  }

  /**
   * HomePageSlider findMany
   */
  export type HomePageSliderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePageSlider
     */
    select?: HomePageSliderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePageSlider
     */
    omit?: HomePageSliderOmit<ExtArgs> | null
    /**
     * Filter, which HomePageSliders to fetch.
     */
    where?: HomePageSliderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomePageSliders to fetch.
     */
    orderBy?: HomePageSliderOrderByWithRelationInput | HomePageSliderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HomePageSliders.
     */
    cursor?: HomePageSliderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomePageSliders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomePageSliders.
     */
    skip?: number
    distinct?: HomePageSliderScalarFieldEnum | HomePageSliderScalarFieldEnum[]
  }

  /**
   * HomePageSlider create
   */
  export type HomePageSliderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePageSlider
     */
    select?: HomePageSliderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePageSlider
     */
    omit?: HomePageSliderOmit<ExtArgs> | null
    /**
     * The data needed to create a HomePageSlider.
     */
    data: XOR<HomePageSliderCreateInput, HomePageSliderUncheckedCreateInput>
  }

  /**
   * HomePageSlider createMany
   */
  export type HomePageSliderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HomePageSliders.
     */
    data: HomePageSliderCreateManyInput | HomePageSliderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HomePageSlider createManyAndReturn
   */
  export type HomePageSliderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePageSlider
     */
    select?: HomePageSliderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomePageSlider
     */
    omit?: HomePageSliderOmit<ExtArgs> | null
    /**
     * The data used to create many HomePageSliders.
     */
    data: HomePageSliderCreateManyInput | HomePageSliderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HomePageSlider update
   */
  export type HomePageSliderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePageSlider
     */
    select?: HomePageSliderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePageSlider
     */
    omit?: HomePageSliderOmit<ExtArgs> | null
    /**
     * The data needed to update a HomePageSlider.
     */
    data: XOR<HomePageSliderUpdateInput, HomePageSliderUncheckedUpdateInput>
    /**
     * Choose, which HomePageSlider to update.
     */
    where: HomePageSliderWhereUniqueInput
  }

  /**
   * HomePageSlider updateMany
   */
  export type HomePageSliderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HomePageSliders.
     */
    data: XOR<HomePageSliderUpdateManyMutationInput, HomePageSliderUncheckedUpdateManyInput>
    /**
     * Filter which HomePageSliders to update
     */
    where?: HomePageSliderWhereInput
    /**
     * Limit how many HomePageSliders to update.
     */
    limit?: number
  }

  /**
   * HomePageSlider updateManyAndReturn
   */
  export type HomePageSliderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePageSlider
     */
    select?: HomePageSliderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomePageSlider
     */
    omit?: HomePageSliderOmit<ExtArgs> | null
    /**
     * The data used to update HomePageSliders.
     */
    data: XOR<HomePageSliderUpdateManyMutationInput, HomePageSliderUncheckedUpdateManyInput>
    /**
     * Filter which HomePageSliders to update
     */
    where?: HomePageSliderWhereInput
    /**
     * Limit how many HomePageSliders to update.
     */
    limit?: number
  }

  /**
   * HomePageSlider upsert
   */
  export type HomePageSliderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePageSlider
     */
    select?: HomePageSliderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePageSlider
     */
    omit?: HomePageSliderOmit<ExtArgs> | null
    /**
     * The filter to search for the HomePageSlider to update in case it exists.
     */
    where: HomePageSliderWhereUniqueInput
    /**
     * In case the HomePageSlider found by the `where` argument doesn't exist, create a new HomePageSlider with this data.
     */
    create: XOR<HomePageSliderCreateInput, HomePageSliderUncheckedCreateInput>
    /**
     * In case the HomePageSlider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomePageSliderUpdateInput, HomePageSliderUncheckedUpdateInput>
  }

  /**
   * HomePageSlider delete
   */
  export type HomePageSliderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePageSlider
     */
    select?: HomePageSliderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePageSlider
     */
    omit?: HomePageSliderOmit<ExtArgs> | null
    /**
     * Filter which HomePageSlider to delete.
     */
    where: HomePageSliderWhereUniqueInput
  }

  /**
   * HomePageSlider deleteMany
   */
  export type HomePageSliderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomePageSliders to delete
     */
    where?: HomePageSliderWhereInput
    /**
     * Limit how many HomePageSliders to delete.
     */
    limit?: number
  }

  /**
   * HomePageSlider without action
   */
  export type HomePageSliderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomePageSlider
     */
    select?: HomePageSliderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomePageSlider
     */
    omit?: HomePageSliderOmit<ExtArgs> | null
  }


  /**
   * Model Language
   */

  export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  export type LanguageMinAggregateOutputType = {
    id: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LanguageMaxAggregateOutputType = {
    id: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LanguageCountAggregateOutputType = {
    id: number
    code: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LanguageMinAggregateInputType = {
    id?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LanguageMaxAggregateInputType = {
    id?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LanguageCountAggregateInputType = {
    id?: true
    code?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Language to aggregate.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Languages
    **/
    _count?: true | LanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageMaxAggregateInputType
  }

  export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguage[P]>
      : GetScalarType<T[P], AggregateLanguage[P]>
  }




  export type LanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageWhereInput
    orderBy?: LanguageOrderByWithAggregationInput | LanguageOrderByWithAggregationInput[]
    by: LanguageScalarFieldEnum[] | LanguageScalarFieldEnum
    having?: LanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageCountAggregateInputType | true
    _min?: LanguageMinAggregateInputType
    _max?: LanguageMaxAggregateInputType
  }

  export type LanguageGroupByOutputType = {
    id: string
    code: string
    createdAt: Date
    updatedAt: Date
    _count: LanguageCountAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  type GetLanguageGroupByPayload<T extends LanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageGroupByOutputType[P]>
        }
      >
    >


  export type LanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectScalar = {
    id?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "createdAt" | "updatedAt", ExtArgs["result"]["language"]>

  export type $LanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Language"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["language"]>
    composites: {}
  }

  type LanguageGetPayload<S extends boolean | null | undefined | LanguageDefaultArgs> = $Result.GetResult<Prisma.$LanguagePayload, S>

  type LanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguageCountAggregateInputType | true
    }

  export interface LanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Language'], meta: { name: 'Language' } }
    /**
     * Find zero or one Language that matches the filter.
     * @param {LanguageFindUniqueArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageFindUniqueArgs>(args: SelectSubset<T, LanguageFindUniqueArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Language that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguageFindUniqueOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageFindFirstArgs>(args?: SelectSubset<T, LanguageFindFirstArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.language.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.language.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languageWithIdOnly = await prisma.language.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanguageFindManyArgs>(args?: SelectSubset<T, LanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Language.
     * @param {LanguageCreateArgs} args - Arguments to create a Language.
     * @example
     * // Create one Language
     * const Language = await prisma.language.create({
     *   data: {
     *     // ... data to create a Language
     *   }
     * })
     * 
     */
    create<T extends LanguageCreateArgs>(args: SelectSubset<T, LanguageCreateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Languages.
     * @param {LanguageCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageCreateManyArgs>(args?: SelectSubset<T, LanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Languages and returns the data saved in the database.
     * @param {LanguageCreateManyAndReturnArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Languages and only return the `id`
     * const languageWithIdOnly = await prisma.language.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguageCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Language.
     * @param {LanguageDeleteArgs} args - Arguments to delete one Language.
     * @example
     * // Delete one Language
     * const Language = await prisma.language.delete({
     *   where: {
     *     // ... filter to delete one Language
     *   }
     * })
     * 
     */
    delete<T extends LanguageDeleteArgs>(args: SelectSubset<T, LanguageDeleteArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Language.
     * @param {LanguageUpdateArgs} args - Arguments to update one Language.
     * @example
     * // Update one Language
     * const language = await prisma.language.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageUpdateArgs>(args: SelectSubset<T, LanguageUpdateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Languages.
     * @param {LanguageDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.language.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageDeleteManyArgs>(args?: SelectSubset<T, LanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageUpdateManyArgs>(args: SelectSubset<T, LanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages and returns the data updated in the database.
     * @param {LanguageUpdateManyAndReturnArgs} args - Arguments to update many Languages.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Languages and only return the `id`
     * const languageWithIdOnly = await prisma.language.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LanguageUpdateManyAndReturnArgs>(args: SelectSubset<T, LanguageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Language.
     * @param {LanguageUpsertArgs} args - Arguments to update or create a Language.
     * @example
     * // Update or create a Language
     * const language = await prisma.language.upsert({
     *   create: {
     *     // ... data to create a Language
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Language we want to update
     *   }
     * })
     */
    upsert<T extends LanguageUpsertArgs>(args: SelectSubset<T, LanguageUpsertArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.language.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends LanguageCountArgs>(
      args?: Subset<T, LanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LanguageAggregateArgs>(args: Subset<T, LanguageAggregateArgs>): Prisma.PrismaPromise<GetLanguageAggregateType<T>>

    /**
     * Group by Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageGroupByArgs['orderBy'] }
        : { orderBy?: LanguageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Language model
   */
  readonly fields: LanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Language.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Language model
   */
  interface LanguageFieldRefs {
    readonly id: FieldRef<"Language", 'String'>
    readonly code: FieldRef<"Language", 'String'>
    readonly createdAt: FieldRef<"Language", 'DateTime'>
    readonly updatedAt: FieldRef<"Language", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Language findUnique
   */
  export type LanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findUniqueOrThrow
   */
  export type LanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findFirst
   */
  export type LanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findFirstOrThrow
   */
  export type LanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findMany
   */
  export type LanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language create
   */
  export type LanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data needed to create a Language.
     */
    data: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
  }

  /**
   * Language createMany
   */
  export type LanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language createManyAndReturn
   */
  export type LanguageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language update
   */
  export type LanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data needed to update a Language.
     */
    data: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
    /**
     * Choose, which Language to update.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language updateMany
   */
  export type LanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language updateManyAndReturn
   */
  export type LanguageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language upsert
   */
  export type LanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The filter to search for the Language to update in case it exists.
     */
    where: LanguageWhereUniqueInput
    /**
     * In case the Language found by the `where` argument doesn't exist, create a new Language with this data.
     */
    create: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
    /**
     * In case the Language was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
  }

  /**
   * Language delete
   */
  export type LanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Filter which Language to delete.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language deleteMany
   */
  export type LanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to delete
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to delete.
     */
    limit?: number
  }

  /**
   * Language without action
   */
  export type LanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
  }


  /**
   * Model Logo
   */

  export type AggregateLogo = {
    _count: LogoCountAggregateOutputType | null
    _min: LogoMinAggregateOutputType | null
    _max: LogoMaxAggregateOutputType | null
  }

  export type LogoMinAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LogoMaxAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LogoCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LogoMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LogoMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LogoCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LogoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logo to aggregate.
     */
    where?: LogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logos to fetch.
     */
    orderBy?: LogoOrderByWithRelationInput | LogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logos
    **/
    _count?: true | LogoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogoMaxAggregateInputType
  }

  export type GetLogoAggregateType<T extends LogoAggregateArgs> = {
        [P in keyof T & keyof AggregateLogo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogo[P]>
      : GetScalarType<T[P], AggregateLogo[P]>
  }




  export type LogoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogoWhereInput
    orderBy?: LogoOrderByWithAggregationInput | LogoOrderByWithAggregationInput[]
    by: LogoScalarFieldEnum[] | LogoScalarFieldEnum
    having?: LogoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogoCountAggregateInputType | true
    _min?: LogoMinAggregateInputType
    _max?: LogoMaxAggregateInputType
  }

  export type LogoGroupByOutputType = {
    id: string
    title: string
    createdAt: Date
    updatedAt: Date
    _count: LogoCountAggregateOutputType | null
    _min: LogoMinAggregateOutputType | null
    _max: LogoMaxAggregateOutputType | null
  }

  type GetLogoGroupByPayload<T extends LogoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogoGroupByOutputType[P]>
            : GetScalarType<T[P], LogoGroupByOutputType[P]>
        }
      >
    >


  export type LogoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["logo"]>

  export type LogoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["logo"]>

  export type LogoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["logo"]>

  export type LogoSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LogoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "createdAt" | "updatedAt", ExtArgs["result"]["logo"]>

  export type $LogoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Logo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["logo"]>
    composites: {}
  }

  type LogoGetPayload<S extends boolean | null | undefined | LogoDefaultArgs> = $Result.GetResult<Prisma.$LogoPayload, S>

  type LogoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogoCountAggregateInputType | true
    }

  export interface LogoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Logo'], meta: { name: 'Logo' } }
    /**
     * Find zero or one Logo that matches the filter.
     * @param {LogoFindUniqueArgs} args - Arguments to find a Logo
     * @example
     * // Get one Logo
     * const logo = await prisma.logo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogoFindUniqueArgs>(args: SelectSubset<T, LogoFindUniqueArgs<ExtArgs>>): Prisma__LogoClient<$Result.GetResult<Prisma.$LogoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogoFindUniqueOrThrowArgs} args - Arguments to find a Logo
     * @example
     * // Get one Logo
     * const logo = await prisma.logo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogoFindUniqueOrThrowArgs>(args: SelectSubset<T, LogoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogoClient<$Result.GetResult<Prisma.$LogoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogoFindFirstArgs} args - Arguments to find a Logo
     * @example
     * // Get one Logo
     * const logo = await prisma.logo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogoFindFirstArgs>(args?: SelectSubset<T, LogoFindFirstArgs<ExtArgs>>): Prisma__LogoClient<$Result.GetResult<Prisma.$LogoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogoFindFirstOrThrowArgs} args - Arguments to find a Logo
     * @example
     * // Get one Logo
     * const logo = await prisma.logo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogoFindFirstOrThrowArgs>(args?: SelectSubset<T, LogoFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogoClient<$Result.GetResult<Prisma.$LogoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logos
     * const logos = await prisma.logo.findMany()
     * 
     * // Get first 10 Logos
     * const logos = await prisma.logo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logoWithIdOnly = await prisma.logo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogoFindManyArgs>(args?: SelectSubset<T, LogoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logo.
     * @param {LogoCreateArgs} args - Arguments to create a Logo.
     * @example
     * // Create one Logo
     * const Logo = await prisma.logo.create({
     *   data: {
     *     // ... data to create a Logo
     *   }
     * })
     * 
     */
    create<T extends LogoCreateArgs>(args: SelectSubset<T, LogoCreateArgs<ExtArgs>>): Prisma__LogoClient<$Result.GetResult<Prisma.$LogoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logos.
     * @param {LogoCreateManyArgs} args - Arguments to create many Logos.
     * @example
     * // Create many Logos
     * const logo = await prisma.logo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogoCreateManyArgs>(args?: SelectSubset<T, LogoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logos and returns the data saved in the database.
     * @param {LogoCreateManyAndReturnArgs} args - Arguments to create many Logos.
     * @example
     * // Create many Logos
     * const logo = await prisma.logo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logos and only return the `id`
     * const logoWithIdOnly = await prisma.logo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogoCreateManyAndReturnArgs>(args?: SelectSubset<T, LogoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Logo.
     * @param {LogoDeleteArgs} args - Arguments to delete one Logo.
     * @example
     * // Delete one Logo
     * const Logo = await prisma.logo.delete({
     *   where: {
     *     // ... filter to delete one Logo
     *   }
     * })
     * 
     */
    delete<T extends LogoDeleteArgs>(args: SelectSubset<T, LogoDeleteArgs<ExtArgs>>): Prisma__LogoClient<$Result.GetResult<Prisma.$LogoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logo.
     * @param {LogoUpdateArgs} args - Arguments to update one Logo.
     * @example
     * // Update one Logo
     * const logo = await prisma.logo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogoUpdateArgs>(args: SelectSubset<T, LogoUpdateArgs<ExtArgs>>): Prisma__LogoClient<$Result.GetResult<Prisma.$LogoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logos.
     * @param {LogoDeleteManyArgs} args - Arguments to filter Logos to delete.
     * @example
     * // Delete a few Logos
     * const { count } = await prisma.logo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogoDeleteManyArgs>(args?: SelectSubset<T, LogoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logos
     * const logo = await prisma.logo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogoUpdateManyArgs>(args: SelectSubset<T, LogoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logos and returns the data updated in the database.
     * @param {LogoUpdateManyAndReturnArgs} args - Arguments to update many Logos.
     * @example
     * // Update many Logos
     * const logo = await prisma.logo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logos and only return the `id`
     * const logoWithIdOnly = await prisma.logo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogoUpdateManyAndReturnArgs>(args: SelectSubset<T, LogoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Logo.
     * @param {LogoUpsertArgs} args - Arguments to update or create a Logo.
     * @example
     * // Update or create a Logo
     * const logo = await prisma.logo.upsert({
     *   create: {
     *     // ... data to create a Logo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logo we want to update
     *   }
     * })
     */
    upsert<T extends LogoUpsertArgs>(args: SelectSubset<T, LogoUpsertArgs<ExtArgs>>): Prisma__LogoClient<$Result.GetResult<Prisma.$LogoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogoCountArgs} args - Arguments to filter Logos to count.
     * @example
     * // Count the number of Logos
     * const count = await prisma.logo.count({
     *   where: {
     *     // ... the filter for the Logos we want to count
     *   }
     * })
    **/
    count<T extends LogoCountArgs>(
      args?: Subset<T, LogoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogoAggregateArgs>(args: Subset<T, LogoAggregateArgs>): Prisma.PrismaPromise<GetLogoAggregateType<T>>

    /**
     * Group by Logo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogoGroupByArgs['orderBy'] }
        : { orderBy?: LogoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Logo model
   */
  readonly fields: LogoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Logo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Logo model
   */
  interface LogoFieldRefs {
    readonly id: FieldRef<"Logo", 'String'>
    readonly title: FieldRef<"Logo", 'String'>
    readonly createdAt: FieldRef<"Logo", 'DateTime'>
    readonly updatedAt: FieldRef<"Logo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Logo findUnique
   */
  export type LogoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logo
     */
    select?: LogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logo
     */
    omit?: LogoOmit<ExtArgs> | null
    /**
     * Filter, which Logo to fetch.
     */
    where: LogoWhereUniqueInput
  }

  /**
   * Logo findUniqueOrThrow
   */
  export type LogoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logo
     */
    select?: LogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logo
     */
    omit?: LogoOmit<ExtArgs> | null
    /**
     * Filter, which Logo to fetch.
     */
    where: LogoWhereUniqueInput
  }

  /**
   * Logo findFirst
   */
  export type LogoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logo
     */
    select?: LogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logo
     */
    omit?: LogoOmit<ExtArgs> | null
    /**
     * Filter, which Logo to fetch.
     */
    where?: LogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logos to fetch.
     */
    orderBy?: LogoOrderByWithRelationInput | LogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logos.
     */
    cursor?: LogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logos.
     */
    distinct?: LogoScalarFieldEnum | LogoScalarFieldEnum[]
  }

  /**
   * Logo findFirstOrThrow
   */
  export type LogoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logo
     */
    select?: LogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logo
     */
    omit?: LogoOmit<ExtArgs> | null
    /**
     * Filter, which Logo to fetch.
     */
    where?: LogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logos to fetch.
     */
    orderBy?: LogoOrderByWithRelationInput | LogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logos.
     */
    cursor?: LogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logos.
     */
    distinct?: LogoScalarFieldEnum | LogoScalarFieldEnum[]
  }

  /**
   * Logo findMany
   */
  export type LogoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logo
     */
    select?: LogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logo
     */
    omit?: LogoOmit<ExtArgs> | null
    /**
     * Filter, which Logos to fetch.
     */
    where?: LogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logos to fetch.
     */
    orderBy?: LogoOrderByWithRelationInput | LogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logos.
     */
    cursor?: LogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logos.
     */
    skip?: number
    distinct?: LogoScalarFieldEnum | LogoScalarFieldEnum[]
  }

  /**
   * Logo create
   */
  export type LogoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logo
     */
    select?: LogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logo
     */
    omit?: LogoOmit<ExtArgs> | null
    /**
     * The data needed to create a Logo.
     */
    data: XOR<LogoCreateInput, LogoUncheckedCreateInput>
  }

  /**
   * Logo createMany
   */
  export type LogoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logos.
     */
    data: LogoCreateManyInput | LogoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Logo createManyAndReturn
   */
  export type LogoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logo
     */
    select?: LogoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Logo
     */
    omit?: LogoOmit<ExtArgs> | null
    /**
     * The data used to create many Logos.
     */
    data: LogoCreateManyInput | LogoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Logo update
   */
  export type LogoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logo
     */
    select?: LogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logo
     */
    omit?: LogoOmit<ExtArgs> | null
    /**
     * The data needed to update a Logo.
     */
    data: XOR<LogoUpdateInput, LogoUncheckedUpdateInput>
    /**
     * Choose, which Logo to update.
     */
    where: LogoWhereUniqueInput
  }

  /**
   * Logo updateMany
   */
  export type LogoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logos.
     */
    data: XOR<LogoUpdateManyMutationInput, LogoUncheckedUpdateManyInput>
    /**
     * Filter which Logos to update
     */
    where?: LogoWhereInput
    /**
     * Limit how many Logos to update.
     */
    limit?: number
  }

  /**
   * Logo updateManyAndReturn
   */
  export type LogoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logo
     */
    select?: LogoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Logo
     */
    omit?: LogoOmit<ExtArgs> | null
    /**
     * The data used to update Logos.
     */
    data: XOR<LogoUpdateManyMutationInput, LogoUncheckedUpdateManyInput>
    /**
     * Filter which Logos to update
     */
    where?: LogoWhereInput
    /**
     * Limit how many Logos to update.
     */
    limit?: number
  }

  /**
   * Logo upsert
   */
  export type LogoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logo
     */
    select?: LogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logo
     */
    omit?: LogoOmit<ExtArgs> | null
    /**
     * The filter to search for the Logo to update in case it exists.
     */
    where: LogoWhereUniqueInput
    /**
     * In case the Logo found by the `where` argument doesn't exist, create a new Logo with this data.
     */
    create: XOR<LogoCreateInput, LogoUncheckedCreateInput>
    /**
     * In case the Logo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogoUpdateInput, LogoUncheckedUpdateInput>
  }

  /**
   * Logo delete
   */
  export type LogoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logo
     */
    select?: LogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logo
     */
    omit?: LogoOmit<ExtArgs> | null
    /**
     * Filter which Logo to delete.
     */
    where: LogoWhereUniqueInput
  }

  /**
   * Logo deleteMany
   */
  export type LogoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logos to delete
     */
    where?: LogoWhereInput
    /**
     * Limit how many Logos to delete.
     */
    limit?: number
  }

  /**
   * Logo without action
   */
  export type LogoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logo
     */
    select?: LogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logo
     */
    omit?: LogoOmit<ExtArgs> | null
  }


  /**
   * Model Navbar
   */

  export type AggregateNavbar = {
    _count: NavbarCountAggregateOutputType | null
    _min: NavbarMinAggregateOutputType | null
    _max: NavbarMaxAggregateOutputType | null
  }

  export type NavbarMinAggregateOutputType = {
    id: string | null
    lang: string | null
    title: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NavbarMaxAggregateOutputType = {
    id: string | null
    lang: string | null
    title: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NavbarCountAggregateOutputType = {
    id: number
    lang: number
    title: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NavbarMinAggregateInputType = {
    id?: true
    lang?: true
    title?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NavbarMaxAggregateInputType = {
    id?: true
    lang?: true
    title?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NavbarCountAggregateInputType = {
    id?: true
    lang?: true
    title?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NavbarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Navbar to aggregate.
     */
    where?: NavbarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Navbars to fetch.
     */
    orderBy?: NavbarOrderByWithRelationInput | NavbarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NavbarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Navbars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Navbars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Navbars
    **/
    _count?: true | NavbarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NavbarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NavbarMaxAggregateInputType
  }

  export type GetNavbarAggregateType<T extends NavbarAggregateArgs> = {
        [P in keyof T & keyof AggregateNavbar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNavbar[P]>
      : GetScalarType<T[P], AggregateNavbar[P]>
  }




  export type NavbarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NavbarWhereInput
    orderBy?: NavbarOrderByWithAggregationInput | NavbarOrderByWithAggregationInput[]
    by: NavbarScalarFieldEnum[] | NavbarScalarFieldEnum
    having?: NavbarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NavbarCountAggregateInputType | true
    _min?: NavbarMinAggregateInputType
    _max?: NavbarMaxAggregateInputType
  }

  export type NavbarGroupByOutputType = {
    id: string
    lang: string
    title: string
    url: string
    createdAt: Date
    updatedAt: Date
    _count: NavbarCountAggregateOutputType | null
    _min: NavbarMinAggregateOutputType | null
    _max: NavbarMaxAggregateOutputType | null
  }

  type GetNavbarGroupByPayload<T extends NavbarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NavbarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NavbarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NavbarGroupByOutputType[P]>
            : GetScalarType<T[P], NavbarGroupByOutputType[P]>
        }
      >
    >


  export type NavbarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    title?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["navbar"]>

  export type NavbarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    title?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["navbar"]>

  export type NavbarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    title?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["navbar"]>

  export type NavbarSelectScalar = {
    id?: boolean
    lang?: boolean
    title?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NavbarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lang" | "title" | "url" | "createdAt" | "updatedAt", ExtArgs["result"]["navbar"]>

  export type $NavbarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Navbar"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lang: string
      title: string
      url: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["navbar"]>
    composites: {}
  }

  type NavbarGetPayload<S extends boolean | null | undefined | NavbarDefaultArgs> = $Result.GetResult<Prisma.$NavbarPayload, S>

  type NavbarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NavbarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NavbarCountAggregateInputType | true
    }

  export interface NavbarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Navbar'], meta: { name: 'Navbar' } }
    /**
     * Find zero or one Navbar that matches the filter.
     * @param {NavbarFindUniqueArgs} args - Arguments to find a Navbar
     * @example
     * // Get one Navbar
     * const navbar = await prisma.navbar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NavbarFindUniqueArgs>(args: SelectSubset<T, NavbarFindUniqueArgs<ExtArgs>>): Prisma__NavbarClient<$Result.GetResult<Prisma.$NavbarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Navbar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NavbarFindUniqueOrThrowArgs} args - Arguments to find a Navbar
     * @example
     * // Get one Navbar
     * const navbar = await prisma.navbar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NavbarFindUniqueOrThrowArgs>(args: SelectSubset<T, NavbarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NavbarClient<$Result.GetResult<Prisma.$NavbarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Navbar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavbarFindFirstArgs} args - Arguments to find a Navbar
     * @example
     * // Get one Navbar
     * const navbar = await prisma.navbar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NavbarFindFirstArgs>(args?: SelectSubset<T, NavbarFindFirstArgs<ExtArgs>>): Prisma__NavbarClient<$Result.GetResult<Prisma.$NavbarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Navbar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavbarFindFirstOrThrowArgs} args - Arguments to find a Navbar
     * @example
     * // Get one Navbar
     * const navbar = await prisma.navbar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NavbarFindFirstOrThrowArgs>(args?: SelectSubset<T, NavbarFindFirstOrThrowArgs<ExtArgs>>): Prisma__NavbarClient<$Result.GetResult<Prisma.$NavbarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Navbars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavbarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Navbars
     * const navbars = await prisma.navbar.findMany()
     * 
     * // Get first 10 Navbars
     * const navbars = await prisma.navbar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const navbarWithIdOnly = await prisma.navbar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NavbarFindManyArgs>(args?: SelectSubset<T, NavbarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavbarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Navbar.
     * @param {NavbarCreateArgs} args - Arguments to create a Navbar.
     * @example
     * // Create one Navbar
     * const Navbar = await prisma.navbar.create({
     *   data: {
     *     // ... data to create a Navbar
     *   }
     * })
     * 
     */
    create<T extends NavbarCreateArgs>(args: SelectSubset<T, NavbarCreateArgs<ExtArgs>>): Prisma__NavbarClient<$Result.GetResult<Prisma.$NavbarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Navbars.
     * @param {NavbarCreateManyArgs} args - Arguments to create many Navbars.
     * @example
     * // Create many Navbars
     * const navbar = await prisma.navbar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NavbarCreateManyArgs>(args?: SelectSubset<T, NavbarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Navbars and returns the data saved in the database.
     * @param {NavbarCreateManyAndReturnArgs} args - Arguments to create many Navbars.
     * @example
     * // Create many Navbars
     * const navbar = await prisma.navbar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Navbars and only return the `id`
     * const navbarWithIdOnly = await prisma.navbar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NavbarCreateManyAndReturnArgs>(args?: SelectSubset<T, NavbarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavbarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Navbar.
     * @param {NavbarDeleteArgs} args - Arguments to delete one Navbar.
     * @example
     * // Delete one Navbar
     * const Navbar = await prisma.navbar.delete({
     *   where: {
     *     // ... filter to delete one Navbar
     *   }
     * })
     * 
     */
    delete<T extends NavbarDeleteArgs>(args: SelectSubset<T, NavbarDeleteArgs<ExtArgs>>): Prisma__NavbarClient<$Result.GetResult<Prisma.$NavbarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Navbar.
     * @param {NavbarUpdateArgs} args - Arguments to update one Navbar.
     * @example
     * // Update one Navbar
     * const navbar = await prisma.navbar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NavbarUpdateArgs>(args: SelectSubset<T, NavbarUpdateArgs<ExtArgs>>): Prisma__NavbarClient<$Result.GetResult<Prisma.$NavbarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Navbars.
     * @param {NavbarDeleteManyArgs} args - Arguments to filter Navbars to delete.
     * @example
     * // Delete a few Navbars
     * const { count } = await prisma.navbar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NavbarDeleteManyArgs>(args?: SelectSubset<T, NavbarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Navbars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavbarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Navbars
     * const navbar = await prisma.navbar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NavbarUpdateManyArgs>(args: SelectSubset<T, NavbarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Navbars and returns the data updated in the database.
     * @param {NavbarUpdateManyAndReturnArgs} args - Arguments to update many Navbars.
     * @example
     * // Update many Navbars
     * const navbar = await prisma.navbar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Navbars and only return the `id`
     * const navbarWithIdOnly = await prisma.navbar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NavbarUpdateManyAndReturnArgs>(args: SelectSubset<T, NavbarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavbarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Navbar.
     * @param {NavbarUpsertArgs} args - Arguments to update or create a Navbar.
     * @example
     * // Update or create a Navbar
     * const navbar = await prisma.navbar.upsert({
     *   create: {
     *     // ... data to create a Navbar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Navbar we want to update
     *   }
     * })
     */
    upsert<T extends NavbarUpsertArgs>(args: SelectSubset<T, NavbarUpsertArgs<ExtArgs>>): Prisma__NavbarClient<$Result.GetResult<Prisma.$NavbarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Navbars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavbarCountArgs} args - Arguments to filter Navbars to count.
     * @example
     * // Count the number of Navbars
     * const count = await prisma.navbar.count({
     *   where: {
     *     // ... the filter for the Navbars we want to count
     *   }
     * })
    **/
    count<T extends NavbarCountArgs>(
      args?: Subset<T, NavbarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NavbarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Navbar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavbarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NavbarAggregateArgs>(args: Subset<T, NavbarAggregateArgs>): Prisma.PrismaPromise<GetNavbarAggregateType<T>>

    /**
     * Group by Navbar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavbarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NavbarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NavbarGroupByArgs['orderBy'] }
        : { orderBy?: NavbarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NavbarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNavbarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Navbar model
   */
  readonly fields: NavbarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Navbar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NavbarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Navbar model
   */
  interface NavbarFieldRefs {
    readonly id: FieldRef<"Navbar", 'String'>
    readonly lang: FieldRef<"Navbar", 'String'>
    readonly title: FieldRef<"Navbar", 'String'>
    readonly url: FieldRef<"Navbar", 'String'>
    readonly createdAt: FieldRef<"Navbar", 'DateTime'>
    readonly updatedAt: FieldRef<"Navbar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Navbar findUnique
   */
  export type NavbarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navbar
     */
    select?: NavbarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navbar
     */
    omit?: NavbarOmit<ExtArgs> | null
    /**
     * Filter, which Navbar to fetch.
     */
    where: NavbarWhereUniqueInput
  }

  /**
   * Navbar findUniqueOrThrow
   */
  export type NavbarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navbar
     */
    select?: NavbarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navbar
     */
    omit?: NavbarOmit<ExtArgs> | null
    /**
     * Filter, which Navbar to fetch.
     */
    where: NavbarWhereUniqueInput
  }

  /**
   * Navbar findFirst
   */
  export type NavbarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navbar
     */
    select?: NavbarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navbar
     */
    omit?: NavbarOmit<ExtArgs> | null
    /**
     * Filter, which Navbar to fetch.
     */
    where?: NavbarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Navbars to fetch.
     */
    orderBy?: NavbarOrderByWithRelationInput | NavbarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Navbars.
     */
    cursor?: NavbarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Navbars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Navbars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Navbars.
     */
    distinct?: NavbarScalarFieldEnum | NavbarScalarFieldEnum[]
  }

  /**
   * Navbar findFirstOrThrow
   */
  export type NavbarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navbar
     */
    select?: NavbarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navbar
     */
    omit?: NavbarOmit<ExtArgs> | null
    /**
     * Filter, which Navbar to fetch.
     */
    where?: NavbarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Navbars to fetch.
     */
    orderBy?: NavbarOrderByWithRelationInput | NavbarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Navbars.
     */
    cursor?: NavbarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Navbars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Navbars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Navbars.
     */
    distinct?: NavbarScalarFieldEnum | NavbarScalarFieldEnum[]
  }

  /**
   * Navbar findMany
   */
  export type NavbarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navbar
     */
    select?: NavbarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navbar
     */
    omit?: NavbarOmit<ExtArgs> | null
    /**
     * Filter, which Navbars to fetch.
     */
    where?: NavbarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Navbars to fetch.
     */
    orderBy?: NavbarOrderByWithRelationInput | NavbarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Navbars.
     */
    cursor?: NavbarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Navbars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Navbars.
     */
    skip?: number
    distinct?: NavbarScalarFieldEnum | NavbarScalarFieldEnum[]
  }

  /**
   * Navbar create
   */
  export type NavbarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navbar
     */
    select?: NavbarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navbar
     */
    omit?: NavbarOmit<ExtArgs> | null
    /**
     * The data needed to create a Navbar.
     */
    data: XOR<NavbarCreateInput, NavbarUncheckedCreateInput>
  }

  /**
   * Navbar createMany
   */
  export type NavbarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Navbars.
     */
    data: NavbarCreateManyInput | NavbarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Navbar createManyAndReturn
   */
  export type NavbarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navbar
     */
    select?: NavbarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Navbar
     */
    omit?: NavbarOmit<ExtArgs> | null
    /**
     * The data used to create many Navbars.
     */
    data: NavbarCreateManyInput | NavbarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Navbar update
   */
  export type NavbarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navbar
     */
    select?: NavbarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navbar
     */
    omit?: NavbarOmit<ExtArgs> | null
    /**
     * The data needed to update a Navbar.
     */
    data: XOR<NavbarUpdateInput, NavbarUncheckedUpdateInput>
    /**
     * Choose, which Navbar to update.
     */
    where: NavbarWhereUniqueInput
  }

  /**
   * Navbar updateMany
   */
  export type NavbarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Navbars.
     */
    data: XOR<NavbarUpdateManyMutationInput, NavbarUncheckedUpdateManyInput>
    /**
     * Filter which Navbars to update
     */
    where?: NavbarWhereInput
    /**
     * Limit how many Navbars to update.
     */
    limit?: number
  }

  /**
   * Navbar updateManyAndReturn
   */
  export type NavbarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navbar
     */
    select?: NavbarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Navbar
     */
    omit?: NavbarOmit<ExtArgs> | null
    /**
     * The data used to update Navbars.
     */
    data: XOR<NavbarUpdateManyMutationInput, NavbarUncheckedUpdateManyInput>
    /**
     * Filter which Navbars to update
     */
    where?: NavbarWhereInput
    /**
     * Limit how many Navbars to update.
     */
    limit?: number
  }

  /**
   * Navbar upsert
   */
  export type NavbarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navbar
     */
    select?: NavbarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navbar
     */
    omit?: NavbarOmit<ExtArgs> | null
    /**
     * The filter to search for the Navbar to update in case it exists.
     */
    where: NavbarWhereUniqueInput
    /**
     * In case the Navbar found by the `where` argument doesn't exist, create a new Navbar with this data.
     */
    create: XOR<NavbarCreateInput, NavbarUncheckedCreateInput>
    /**
     * In case the Navbar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NavbarUpdateInput, NavbarUncheckedUpdateInput>
  }

  /**
   * Navbar delete
   */
  export type NavbarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navbar
     */
    select?: NavbarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navbar
     */
    omit?: NavbarOmit<ExtArgs> | null
    /**
     * Filter which Navbar to delete.
     */
    where: NavbarWhereUniqueInput
  }

  /**
   * Navbar deleteMany
   */
  export type NavbarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Navbars to delete
     */
    where?: NavbarWhereInput
    /**
     * Limit how many Navbars to delete.
     */
    limit?: number
  }

  /**
   * Navbar without action
   */
  export type NavbarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navbar
     */
    select?: NavbarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navbar
     */
    omit?: NavbarOmit<ExtArgs> | null
  }


  /**
   * Model SocialLink
   */

  export type AggregateSocialLink = {
    _count: SocialLinkCountAggregateOutputType | null
    _min: SocialLinkMinAggregateOutputType | null
    _max: SocialLinkMaxAggregateOutputType | null
  }

  export type SocialLinkMinAggregateOutputType = {
    id: string | null
    image: string | null
    url: string | null
    footerLabelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialLinkMaxAggregateOutputType = {
    id: string | null
    image: string | null
    url: string | null
    footerLabelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialLinkCountAggregateOutputType = {
    id: number
    image: number
    url: number
    footerLabelId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SocialLinkMinAggregateInputType = {
    id?: true
    image?: true
    url?: true
    footerLabelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialLinkMaxAggregateInputType = {
    id?: true
    image?: true
    url?: true
    footerLabelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialLinkCountAggregateInputType = {
    id?: true
    image?: true
    url?: true
    footerLabelId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SocialLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLink to aggregate.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialLinks
    **/
    _count?: true | SocialLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialLinkMaxAggregateInputType
  }

  export type GetSocialLinkAggregateType<T extends SocialLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialLink[P]>
      : GetScalarType<T[P], AggregateSocialLink[P]>
  }




  export type SocialLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialLinkWhereInput
    orderBy?: SocialLinkOrderByWithAggregationInput | SocialLinkOrderByWithAggregationInput[]
    by: SocialLinkScalarFieldEnum[] | SocialLinkScalarFieldEnum
    having?: SocialLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialLinkCountAggregateInputType | true
    _min?: SocialLinkMinAggregateInputType
    _max?: SocialLinkMaxAggregateInputType
  }

  export type SocialLinkGroupByOutputType = {
    id: string
    image: string
    url: string
    footerLabelId: string
    createdAt: Date
    updatedAt: Date
    _count: SocialLinkCountAggregateOutputType | null
    _min: SocialLinkMinAggregateOutputType | null
    _max: SocialLinkMaxAggregateOutputType | null
  }

  type GetSocialLinkGroupByPayload<T extends SocialLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialLinkGroupByOutputType[P]>
            : GetScalarType<T[P], SocialLinkGroupByOutputType[P]>
        }
      >
    >


  export type SocialLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    url?: boolean
    footerLabelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    footerLabel?: boolean | FooterLabelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    url?: boolean
    footerLabelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    footerLabel?: boolean | FooterLabelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    url?: boolean
    footerLabelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    footerLabel?: boolean | FooterLabelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectScalar = {
    id?: boolean
    image?: boolean
    url?: boolean
    footerLabelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SocialLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "url" | "footerLabelId" | "createdAt" | "updatedAt", ExtArgs["result"]["socialLink"]>
  export type SocialLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    footerLabel?: boolean | FooterLabelDefaultArgs<ExtArgs>
  }
  export type SocialLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    footerLabel?: boolean | FooterLabelDefaultArgs<ExtArgs>
  }
  export type SocialLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    footerLabel?: boolean | FooterLabelDefaultArgs<ExtArgs>
  }

  export type $SocialLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialLink"
    objects: {
      footerLabel: Prisma.$FooterLabelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      image: string
      url: string
      footerLabelId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["socialLink"]>
    composites: {}
  }

  type SocialLinkGetPayload<S extends boolean | null | undefined | SocialLinkDefaultArgs> = $Result.GetResult<Prisma.$SocialLinkPayload, S>

  type SocialLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialLinkCountAggregateInputType | true
    }

  export interface SocialLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialLink'], meta: { name: 'SocialLink' } }
    /**
     * Find zero or one SocialLink that matches the filter.
     * @param {SocialLinkFindUniqueArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialLinkFindUniqueArgs>(args: SelectSubset<T, SocialLinkFindUniqueArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialLinkFindUniqueOrThrowArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindFirstArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialLinkFindFirstArgs>(args?: SelectSubset<T, SocialLinkFindFirstArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindFirstOrThrowArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialLinks
     * const socialLinks = await prisma.socialLink.findMany()
     * 
     * // Get first 10 SocialLinks
     * const socialLinks = await prisma.socialLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialLinkFindManyArgs>(args?: SelectSubset<T, SocialLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialLink.
     * @param {SocialLinkCreateArgs} args - Arguments to create a SocialLink.
     * @example
     * // Create one SocialLink
     * const SocialLink = await prisma.socialLink.create({
     *   data: {
     *     // ... data to create a SocialLink
     *   }
     * })
     * 
     */
    create<T extends SocialLinkCreateArgs>(args: SelectSubset<T, SocialLinkCreateArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialLinks.
     * @param {SocialLinkCreateManyArgs} args - Arguments to create many SocialLinks.
     * @example
     * // Create many SocialLinks
     * const socialLink = await prisma.socialLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialLinkCreateManyArgs>(args?: SelectSubset<T, SocialLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialLinks and returns the data saved in the database.
     * @param {SocialLinkCreateManyAndReturnArgs} args - Arguments to create many SocialLinks.
     * @example
     * // Create many SocialLinks
     * const socialLink = await prisma.socialLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialLinks and only return the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialLink.
     * @param {SocialLinkDeleteArgs} args - Arguments to delete one SocialLink.
     * @example
     * // Delete one SocialLink
     * const SocialLink = await prisma.socialLink.delete({
     *   where: {
     *     // ... filter to delete one SocialLink
     *   }
     * })
     * 
     */
    delete<T extends SocialLinkDeleteArgs>(args: SelectSubset<T, SocialLinkDeleteArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialLink.
     * @param {SocialLinkUpdateArgs} args - Arguments to update one SocialLink.
     * @example
     * // Update one SocialLink
     * const socialLink = await prisma.socialLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialLinkUpdateArgs>(args: SelectSubset<T, SocialLinkUpdateArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialLinks.
     * @param {SocialLinkDeleteManyArgs} args - Arguments to filter SocialLinks to delete.
     * @example
     * // Delete a few SocialLinks
     * const { count } = await prisma.socialLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialLinkDeleteManyArgs>(args?: SelectSubset<T, SocialLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialLinks
     * const socialLink = await prisma.socialLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialLinkUpdateManyArgs>(args: SelectSubset<T, SocialLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialLinks and returns the data updated in the database.
     * @param {SocialLinkUpdateManyAndReturnArgs} args - Arguments to update many SocialLinks.
     * @example
     * // Update many SocialLinks
     * const socialLink = await prisma.socialLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialLinks and only return the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SocialLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialLink.
     * @param {SocialLinkUpsertArgs} args - Arguments to update or create a SocialLink.
     * @example
     * // Update or create a SocialLink
     * const socialLink = await prisma.socialLink.upsert({
     *   create: {
     *     // ... data to create a SocialLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialLink we want to update
     *   }
     * })
     */
    upsert<T extends SocialLinkUpsertArgs>(args: SelectSubset<T, SocialLinkUpsertArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkCountArgs} args - Arguments to filter SocialLinks to count.
     * @example
     * // Count the number of SocialLinks
     * const count = await prisma.socialLink.count({
     *   where: {
     *     // ... the filter for the SocialLinks we want to count
     *   }
     * })
    **/
    count<T extends SocialLinkCountArgs>(
      args?: Subset<T, SocialLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SocialLinkAggregateArgs>(args: Subset<T, SocialLinkAggregateArgs>): Prisma.PrismaPromise<GetSocialLinkAggregateType<T>>

    /**
     * Group by SocialLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SocialLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialLinkGroupByArgs['orderBy'] }
        : { orderBy?: SocialLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SocialLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialLink model
   */
  readonly fields: SocialLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    footerLabel<T extends FooterLabelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FooterLabelDefaultArgs<ExtArgs>>): Prisma__FooterLabelClient<$Result.GetResult<Prisma.$FooterLabelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SocialLink model
   */
  interface SocialLinkFieldRefs {
    readonly id: FieldRef<"SocialLink", 'String'>
    readonly image: FieldRef<"SocialLink", 'String'>
    readonly url: FieldRef<"SocialLink", 'String'>
    readonly footerLabelId: FieldRef<"SocialLink", 'String'>
    readonly createdAt: FieldRef<"SocialLink", 'DateTime'>
    readonly updatedAt: FieldRef<"SocialLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocialLink findUnique
   */
  export type SocialLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink findUniqueOrThrow
   */
  export type SocialLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink findFirst
   */
  export type SocialLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinks.
     */
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink findFirstOrThrow
   */
  export type SocialLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinks.
     */
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink findMany
   */
  export type SocialLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLinks to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink create
   */
  export type SocialLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialLink.
     */
    data: XOR<SocialLinkCreateInput, SocialLinkUncheckedCreateInput>
  }

  /**
   * SocialLink createMany
   */
  export type SocialLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialLinks.
     */
    data: SocialLinkCreateManyInput | SocialLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialLink createManyAndReturn
   */
  export type SocialLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * The data used to create many SocialLinks.
     */
    data: SocialLinkCreateManyInput | SocialLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialLink update
   */
  export type SocialLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialLink.
     */
    data: XOR<SocialLinkUpdateInput, SocialLinkUncheckedUpdateInput>
    /**
     * Choose, which SocialLink to update.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink updateMany
   */
  export type SocialLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialLinks.
     */
    data: XOR<SocialLinkUpdateManyMutationInput, SocialLinkUncheckedUpdateManyInput>
    /**
     * Filter which SocialLinks to update
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to update.
     */
    limit?: number
  }

  /**
   * SocialLink updateManyAndReturn
   */
  export type SocialLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * The data used to update SocialLinks.
     */
    data: XOR<SocialLinkUpdateManyMutationInput, SocialLinkUncheckedUpdateManyInput>
    /**
     * Filter which SocialLinks to update
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialLink upsert
   */
  export type SocialLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialLink to update in case it exists.
     */
    where: SocialLinkWhereUniqueInput
    /**
     * In case the SocialLink found by the `where` argument doesn't exist, create a new SocialLink with this data.
     */
    create: XOR<SocialLinkCreateInput, SocialLinkUncheckedCreateInput>
    /**
     * In case the SocialLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialLinkUpdateInput, SocialLinkUncheckedUpdateInput>
  }

  /**
   * SocialLink delete
   */
  export type SocialLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter which SocialLink to delete.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink deleteMany
   */
  export type SocialLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLinks to delete
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to delete.
     */
    limit?: number
  }

  /**
   * SocialLink without action
   */
  export type SocialLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
  }


  /**
   * Model User_session
   */

  export type AggregateUser_session = {
    _count: User_sessionCountAggregateOutputType | null
    _min: User_sessionMinAggregateOutputType | null
    _max: User_sessionMaxAggregateOutputType | null
  }

  export type User_sessionMinAggregateOutputType = {
    sid: string | null
    expire: Date | null
  }

  export type User_sessionMaxAggregateOutputType = {
    sid: string | null
    expire: Date | null
  }

  export type User_sessionCountAggregateOutputType = {
    sid: number
    expire: number
    sess: number
    _all: number
  }


  export type User_sessionMinAggregateInputType = {
    sid?: true
    expire?: true
  }

  export type User_sessionMaxAggregateInputType = {
    sid?: true
    expire?: true
  }

  export type User_sessionCountAggregateInputType = {
    sid?: true
    expire?: true
    sess?: true
    _all?: true
  }

  export type User_sessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_session to aggregate.
     */
    where?: User_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_sessions to fetch.
     */
    orderBy?: User_sessionOrderByWithRelationInput | User_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_sessions
    **/
    _count?: true | User_sessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_sessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_sessionMaxAggregateInputType
  }

  export type GetUser_sessionAggregateType<T extends User_sessionAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_session]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_session[P]>
      : GetScalarType<T[P], AggregateUser_session[P]>
  }




  export type User_sessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_sessionWhereInput
    orderBy?: User_sessionOrderByWithAggregationInput | User_sessionOrderByWithAggregationInput[]
    by: User_sessionScalarFieldEnum[] | User_sessionScalarFieldEnum
    having?: User_sessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_sessionCountAggregateInputType | true
    _min?: User_sessionMinAggregateInputType
    _max?: User_sessionMaxAggregateInputType
  }

  export type User_sessionGroupByOutputType = {
    sid: string
    expire: Date
    sess: JsonValue
    _count: User_sessionCountAggregateOutputType | null
    _min: User_sessionMinAggregateOutputType | null
    _max: User_sessionMaxAggregateOutputType | null
  }

  type GetUser_sessionGroupByPayload<T extends User_sessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_sessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_sessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_sessionGroupByOutputType[P]>
            : GetScalarType<T[P], User_sessionGroupByOutputType[P]>
        }
      >
    >


  export type User_sessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sid?: boolean
    expire?: boolean
    sess?: boolean
  }, ExtArgs["result"]["user_session"]>

  export type User_sessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sid?: boolean
    expire?: boolean
    sess?: boolean
  }, ExtArgs["result"]["user_session"]>

  export type User_sessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sid?: boolean
    expire?: boolean
    sess?: boolean
  }, ExtArgs["result"]["user_session"]>

  export type User_sessionSelectScalar = {
    sid?: boolean
    expire?: boolean
    sess?: boolean
  }

  export type User_sessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sid" | "expire" | "sess", ExtArgs["result"]["user_session"]>

  export type $User_sessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User_session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      sid: string
      expire: Date
      sess: Prisma.JsonValue
    }, ExtArgs["result"]["user_session"]>
    composites: {}
  }

  type User_sessionGetPayload<S extends boolean | null | undefined | User_sessionDefaultArgs> = $Result.GetResult<Prisma.$User_sessionPayload, S>

  type User_sessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<User_sessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_sessionCountAggregateInputType | true
    }

  export interface User_sessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User_session'], meta: { name: 'User_session' } }
    /**
     * Find zero or one User_session that matches the filter.
     * @param {User_sessionFindUniqueArgs} args - Arguments to find a User_session
     * @example
     * // Get one User_session
     * const user_session = await prisma.user_session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_sessionFindUniqueArgs>(args: SelectSubset<T, User_sessionFindUniqueArgs<ExtArgs>>): Prisma__User_sessionClient<$Result.GetResult<Prisma.$User_sessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {User_sessionFindUniqueOrThrowArgs} args - Arguments to find a User_session
     * @example
     * // Get one User_session
     * const user_session = await prisma.user_session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_sessionFindUniqueOrThrowArgs>(args: SelectSubset<T, User_sessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__User_sessionClient<$Result.GetResult<Prisma.$User_sessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_sessionFindFirstArgs} args - Arguments to find a User_session
     * @example
     * // Get one User_session
     * const user_session = await prisma.user_session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_sessionFindFirstArgs>(args?: SelectSubset<T, User_sessionFindFirstArgs<ExtArgs>>): Prisma__User_sessionClient<$Result.GetResult<Prisma.$User_sessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_sessionFindFirstOrThrowArgs} args - Arguments to find a User_session
     * @example
     * // Get one User_session
     * const user_session = await prisma.user_session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_sessionFindFirstOrThrowArgs>(args?: SelectSubset<T, User_sessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__User_sessionClient<$Result.GetResult<Prisma.$User_sessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_sessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_sessions
     * const user_sessions = await prisma.user_session.findMany()
     * 
     * // Get first 10 User_sessions
     * const user_sessions = await prisma.user_session.findMany({ take: 10 })
     * 
     * // Only select the `sid`
     * const user_sessionWithSidOnly = await prisma.user_session.findMany({ select: { sid: true } })
     * 
     */
    findMany<T extends User_sessionFindManyArgs>(args?: SelectSubset<T, User_sessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_sessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_session.
     * @param {User_sessionCreateArgs} args - Arguments to create a User_session.
     * @example
     * // Create one User_session
     * const User_session = await prisma.user_session.create({
     *   data: {
     *     // ... data to create a User_session
     *   }
     * })
     * 
     */
    create<T extends User_sessionCreateArgs>(args: SelectSubset<T, User_sessionCreateArgs<ExtArgs>>): Prisma__User_sessionClient<$Result.GetResult<Prisma.$User_sessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_sessions.
     * @param {User_sessionCreateManyArgs} args - Arguments to create many User_sessions.
     * @example
     * // Create many User_sessions
     * const user_session = await prisma.user_session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends User_sessionCreateManyArgs>(args?: SelectSubset<T, User_sessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_sessions and returns the data saved in the database.
     * @param {User_sessionCreateManyAndReturnArgs} args - Arguments to create many User_sessions.
     * @example
     * // Create many User_sessions
     * const user_session = await prisma.user_session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_sessions and only return the `sid`
     * const user_sessionWithSidOnly = await prisma.user_session.createManyAndReturn({
     *   select: { sid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends User_sessionCreateManyAndReturnArgs>(args?: SelectSubset<T, User_sessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_sessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_session.
     * @param {User_sessionDeleteArgs} args - Arguments to delete one User_session.
     * @example
     * // Delete one User_session
     * const User_session = await prisma.user_session.delete({
     *   where: {
     *     // ... filter to delete one User_session
     *   }
     * })
     * 
     */
    delete<T extends User_sessionDeleteArgs>(args: SelectSubset<T, User_sessionDeleteArgs<ExtArgs>>): Prisma__User_sessionClient<$Result.GetResult<Prisma.$User_sessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_session.
     * @param {User_sessionUpdateArgs} args - Arguments to update one User_session.
     * @example
     * // Update one User_session
     * const user_session = await prisma.user_session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends User_sessionUpdateArgs>(args: SelectSubset<T, User_sessionUpdateArgs<ExtArgs>>): Prisma__User_sessionClient<$Result.GetResult<Prisma.$User_sessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_sessions.
     * @param {User_sessionDeleteManyArgs} args - Arguments to filter User_sessions to delete.
     * @example
     * // Delete a few User_sessions
     * const { count } = await prisma.user_session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends User_sessionDeleteManyArgs>(args?: SelectSubset<T, User_sessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_sessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_sessions
     * const user_session = await prisma.user_session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends User_sessionUpdateManyArgs>(args: SelectSubset<T, User_sessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_sessions and returns the data updated in the database.
     * @param {User_sessionUpdateManyAndReturnArgs} args - Arguments to update many User_sessions.
     * @example
     * // Update many User_sessions
     * const user_session = await prisma.user_session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_sessions and only return the `sid`
     * const user_sessionWithSidOnly = await prisma.user_session.updateManyAndReturn({
     *   select: { sid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends User_sessionUpdateManyAndReturnArgs>(args: SelectSubset<T, User_sessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_sessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_session.
     * @param {User_sessionUpsertArgs} args - Arguments to update or create a User_session.
     * @example
     * // Update or create a User_session
     * const user_session = await prisma.user_session.upsert({
     *   create: {
     *     // ... data to create a User_session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_session we want to update
     *   }
     * })
     */
    upsert<T extends User_sessionUpsertArgs>(args: SelectSubset<T, User_sessionUpsertArgs<ExtArgs>>): Prisma__User_sessionClient<$Result.GetResult<Prisma.$User_sessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_sessionCountArgs} args - Arguments to filter User_sessions to count.
     * @example
     * // Count the number of User_sessions
     * const count = await prisma.user_session.count({
     *   where: {
     *     // ... the filter for the User_sessions we want to count
     *   }
     * })
    **/
    count<T extends User_sessionCountArgs>(
      args?: Subset<T, User_sessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_sessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_sessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_sessionAggregateArgs>(args: Subset<T, User_sessionAggregateArgs>): Prisma.PrismaPromise<GetUser_sessionAggregateType<T>>

    /**
     * Group by User_session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_sessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_sessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_sessionGroupByArgs['orderBy'] }
        : { orderBy?: User_sessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_sessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_sessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User_session model
   */
  readonly fields: User_sessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_sessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User_session model
   */
  interface User_sessionFieldRefs {
    readonly sid: FieldRef<"User_session", 'String'>
    readonly expire: FieldRef<"User_session", 'DateTime'>
    readonly sess: FieldRef<"User_session", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * User_session findUnique
   */
  export type User_sessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_session
     */
    select?: User_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_session
     */
    omit?: User_sessionOmit<ExtArgs> | null
    /**
     * Filter, which User_session to fetch.
     */
    where: User_sessionWhereUniqueInput
  }

  /**
   * User_session findUniqueOrThrow
   */
  export type User_sessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_session
     */
    select?: User_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_session
     */
    omit?: User_sessionOmit<ExtArgs> | null
    /**
     * Filter, which User_session to fetch.
     */
    where: User_sessionWhereUniqueInput
  }

  /**
   * User_session findFirst
   */
  export type User_sessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_session
     */
    select?: User_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_session
     */
    omit?: User_sessionOmit<ExtArgs> | null
    /**
     * Filter, which User_session to fetch.
     */
    where?: User_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_sessions to fetch.
     */
    orderBy?: User_sessionOrderByWithRelationInput | User_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_sessions.
     */
    cursor?: User_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_sessions.
     */
    distinct?: User_sessionScalarFieldEnum | User_sessionScalarFieldEnum[]
  }

  /**
   * User_session findFirstOrThrow
   */
  export type User_sessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_session
     */
    select?: User_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_session
     */
    omit?: User_sessionOmit<ExtArgs> | null
    /**
     * Filter, which User_session to fetch.
     */
    where?: User_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_sessions to fetch.
     */
    orderBy?: User_sessionOrderByWithRelationInput | User_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_sessions.
     */
    cursor?: User_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_sessions.
     */
    distinct?: User_sessionScalarFieldEnum | User_sessionScalarFieldEnum[]
  }

  /**
   * User_session findMany
   */
  export type User_sessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_session
     */
    select?: User_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_session
     */
    omit?: User_sessionOmit<ExtArgs> | null
    /**
     * Filter, which User_sessions to fetch.
     */
    where?: User_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_sessions to fetch.
     */
    orderBy?: User_sessionOrderByWithRelationInput | User_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_sessions.
     */
    cursor?: User_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_sessions.
     */
    skip?: number
    distinct?: User_sessionScalarFieldEnum | User_sessionScalarFieldEnum[]
  }

  /**
   * User_session create
   */
  export type User_sessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_session
     */
    select?: User_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_session
     */
    omit?: User_sessionOmit<ExtArgs> | null
    /**
     * The data needed to create a User_session.
     */
    data: XOR<User_sessionCreateInput, User_sessionUncheckedCreateInput>
  }

  /**
   * User_session createMany
   */
  export type User_sessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many User_sessions.
     */
    data: User_sessionCreateManyInput | User_sessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User_session createManyAndReturn
   */
  export type User_sessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_session
     */
    select?: User_sessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_session
     */
    omit?: User_sessionOmit<ExtArgs> | null
    /**
     * The data used to create many User_sessions.
     */
    data: User_sessionCreateManyInput | User_sessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User_session update
   */
  export type User_sessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_session
     */
    select?: User_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_session
     */
    omit?: User_sessionOmit<ExtArgs> | null
    /**
     * The data needed to update a User_session.
     */
    data: XOR<User_sessionUpdateInput, User_sessionUncheckedUpdateInput>
    /**
     * Choose, which User_session to update.
     */
    where: User_sessionWhereUniqueInput
  }

  /**
   * User_session updateMany
   */
  export type User_sessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update User_sessions.
     */
    data: XOR<User_sessionUpdateManyMutationInput, User_sessionUncheckedUpdateManyInput>
    /**
     * Filter which User_sessions to update
     */
    where?: User_sessionWhereInput
    /**
     * Limit how many User_sessions to update.
     */
    limit?: number
  }

  /**
   * User_session updateManyAndReturn
   */
  export type User_sessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_session
     */
    select?: User_sessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_session
     */
    omit?: User_sessionOmit<ExtArgs> | null
    /**
     * The data used to update User_sessions.
     */
    data: XOR<User_sessionUpdateManyMutationInput, User_sessionUncheckedUpdateManyInput>
    /**
     * Filter which User_sessions to update
     */
    where?: User_sessionWhereInput
    /**
     * Limit how many User_sessions to update.
     */
    limit?: number
  }

  /**
   * User_session upsert
   */
  export type User_sessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_session
     */
    select?: User_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_session
     */
    omit?: User_sessionOmit<ExtArgs> | null
    /**
     * The filter to search for the User_session to update in case it exists.
     */
    where: User_sessionWhereUniqueInput
    /**
     * In case the User_session found by the `where` argument doesn't exist, create a new User_session with this data.
     */
    create: XOR<User_sessionCreateInput, User_sessionUncheckedCreateInput>
    /**
     * In case the User_session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_sessionUpdateInput, User_sessionUncheckedUpdateInput>
  }

  /**
   * User_session delete
   */
  export type User_sessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_session
     */
    select?: User_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_session
     */
    omit?: User_sessionOmit<ExtArgs> | null
    /**
     * Filter which User_session to delete.
     */
    where: User_sessionWhereUniqueInput
  }

  /**
   * User_session deleteMany
   */
  export type User_sessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_sessions to delete
     */
    where?: User_sessionWhereInput
    /**
     * Limit how many User_sessions to delete.
     */
    limit?: number
  }

  /**
   * User_session without action
   */
  export type User_sessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_session
     */
    select?: User_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_session
     */
    omit?: User_sessionOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AboutPageIntroScalarFieldEnum: {
    id: 'id',
    lang: 'lang',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AboutPageIntroScalarFieldEnum = (typeof AboutPageIntroScalarFieldEnum)[keyof typeof AboutPageIntroScalarFieldEnum]


  export const AboutPageTeamHeadingScalarFieldEnum: {
    id: 'id',
    lang: 'lang',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AboutPageTeamHeadingScalarFieldEnum = (typeof AboutPageTeamHeadingScalarFieldEnum)[keyof typeof AboutPageTeamHeadingScalarFieldEnum]


  export const AboutPageTeamScalarFieldEnum: {
    id: 'id',
    lang: 'lang',
    image: 'image',
    name: 'name',
    profession: 'profession',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AboutPageTeamScalarFieldEnum = (typeof AboutPageTeamScalarFieldEnum)[keyof typeof AboutPageTeamScalarFieldEnum]


  export const ContactPageContentScalarFieldEnum: {
    id: 'id',
    lang: 'lang',
    title: 'title',
    name_placeholder: 'name_placeholder',
    email_placeholder: 'email_placeholder',
    message_placeholder: 'message_placeholder',
    btn_text: 'btn_text',
    successful_text: 'successful_text',
    error_text: 'error_text',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactPageContentScalarFieldEnum = (typeof ContactPageContentScalarFieldEnum)[keyof typeof ContactPageContentScalarFieldEnum]


  export const FooterLabelScalarFieldEnum: {
    id: 'id',
    lang: 'lang',
    title: 'title',
    credit: 'credit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FooterLabelScalarFieldEnum = (typeof FooterLabelScalarFieldEnum)[keyof typeof FooterLabelScalarFieldEnum]


  export const HomePagePackageScalarFieldEnum: {
    id: 'id',
    lang: 'lang',
    discount: 'discount',
    image: 'image',
    title: 'title',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HomePagePackageScalarFieldEnum = (typeof HomePagePackageScalarFieldEnum)[keyof typeof HomePagePackageScalarFieldEnum]


  export const HomePagePackagesHeadingScalarFieldEnum: {
    id: 'id',
    lang: 'lang',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HomePagePackagesHeadingScalarFieldEnum = (typeof HomePagePackagesHeadingScalarFieldEnum)[keyof typeof HomePagePackagesHeadingScalarFieldEnum]


  export const HomePageSliderScalarFieldEnum: {
    id: 'id',
    lang: 'lang',
    img: 'img',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HomePageSliderScalarFieldEnum = (typeof HomePageSliderScalarFieldEnum)[keyof typeof HomePageSliderScalarFieldEnum]


  export const LanguageScalarFieldEnum: {
    id: 'id',
    code: 'code',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum]


  export const LogoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LogoScalarFieldEnum = (typeof LogoScalarFieldEnum)[keyof typeof LogoScalarFieldEnum]


  export const NavbarScalarFieldEnum: {
    id: 'id',
    lang: 'lang',
    title: 'title',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NavbarScalarFieldEnum = (typeof NavbarScalarFieldEnum)[keyof typeof NavbarScalarFieldEnum]


  export const SocialLinkScalarFieldEnum: {
    id: 'id',
    image: 'image',
    url: 'url',
    footerLabelId: 'footerLabelId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SocialLinkScalarFieldEnum = (typeof SocialLinkScalarFieldEnum)[keyof typeof SocialLinkScalarFieldEnum]


  export const User_sessionScalarFieldEnum: {
    sid: 'sid',
    expire: 'expire',
    sess: 'sess'
  };

  export type User_sessionScalarFieldEnum = (typeof User_sessionScalarFieldEnum)[keyof typeof User_sessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AboutPageIntroWhereInput = {
    AND?: AboutPageIntroWhereInput | AboutPageIntroWhereInput[]
    OR?: AboutPageIntroWhereInput[]
    NOT?: AboutPageIntroWhereInput | AboutPageIntroWhereInput[]
    id?: StringFilter<"AboutPageIntro"> | string
    lang?: StringFilter<"AboutPageIntro"> | string
    title?: StringFilter<"AboutPageIntro"> | string
    description?: StringFilter<"AboutPageIntro"> | string
    createdAt?: DateTimeFilter<"AboutPageIntro"> | Date | string
    updatedAt?: DateTimeFilter<"AboutPageIntro"> | Date | string
  }

  export type AboutPageIntroOrderByWithRelationInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutPageIntroWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AboutPageIntroWhereInput | AboutPageIntroWhereInput[]
    OR?: AboutPageIntroWhereInput[]
    NOT?: AboutPageIntroWhereInput | AboutPageIntroWhereInput[]
    lang?: StringFilter<"AboutPageIntro"> | string
    title?: StringFilter<"AboutPageIntro"> | string
    description?: StringFilter<"AboutPageIntro"> | string
    createdAt?: DateTimeFilter<"AboutPageIntro"> | Date | string
    updatedAt?: DateTimeFilter<"AboutPageIntro"> | Date | string
  }, "id">

  export type AboutPageIntroOrderByWithAggregationInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AboutPageIntroCountOrderByAggregateInput
    _max?: AboutPageIntroMaxOrderByAggregateInput
    _min?: AboutPageIntroMinOrderByAggregateInput
  }

  export type AboutPageIntroScalarWhereWithAggregatesInput = {
    AND?: AboutPageIntroScalarWhereWithAggregatesInput | AboutPageIntroScalarWhereWithAggregatesInput[]
    OR?: AboutPageIntroScalarWhereWithAggregatesInput[]
    NOT?: AboutPageIntroScalarWhereWithAggregatesInput | AboutPageIntroScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AboutPageIntro"> | string
    lang?: StringWithAggregatesFilter<"AboutPageIntro"> | string
    title?: StringWithAggregatesFilter<"AboutPageIntro"> | string
    description?: StringWithAggregatesFilter<"AboutPageIntro"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AboutPageIntro"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AboutPageIntro"> | Date | string
  }

  export type AboutPageTeamHeadingWhereInput = {
    AND?: AboutPageTeamHeadingWhereInput | AboutPageTeamHeadingWhereInput[]
    OR?: AboutPageTeamHeadingWhereInput[]
    NOT?: AboutPageTeamHeadingWhereInput | AboutPageTeamHeadingWhereInput[]
    id?: StringFilter<"AboutPageTeamHeading"> | string
    lang?: StringFilter<"AboutPageTeamHeading"> | string
    title?: StringFilter<"AboutPageTeamHeading"> | string
    createdAt?: DateTimeFilter<"AboutPageTeamHeading"> | Date | string
    updatedAt?: DateTimeFilter<"AboutPageTeamHeading"> | Date | string
  }

  export type AboutPageTeamHeadingOrderByWithRelationInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutPageTeamHeadingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AboutPageTeamHeadingWhereInput | AboutPageTeamHeadingWhereInput[]
    OR?: AboutPageTeamHeadingWhereInput[]
    NOT?: AboutPageTeamHeadingWhereInput | AboutPageTeamHeadingWhereInput[]
    lang?: StringFilter<"AboutPageTeamHeading"> | string
    title?: StringFilter<"AboutPageTeamHeading"> | string
    createdAt?: DateTimeFilter<"AboutPageTeamHeading"> | Date | string
    updatedAt?: DateTimeFilter<"AboutPageTeamHeading"> | Date | string
  }, "id">

  export type AboutPageTeamHeadingOrderByWithAggregationInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AboutPageTeamHeadingCountOrderByAggregateInput
    _max?: AboutPageTeamHeadingMaxOrderByAggregateInput
    _min?: AboutPageTeamHeadingMinOrderByAggregateInput
  }

  export type AboutPageTeamHeadingScalarWhereWithAggregatesInput = {
    AND?: AboutPageTeamHeadingScalarWhereWithAggregatesInput | AboutPageTeamHeadingScalarWhereWithAggregatesInput[]
    OR?: AboutPageTeamHeadingScalarWhereWithAggregatesInput[]
    NOT?: AboutPageTeamHeadingScalarWhereWithAggregatesInput | AboutPageTeamHeadingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AboutPageTeamHeading"> | string
    lang?: StringWithAggregatesFilter<"AboutPageTeamHeading"> | string
    title?: StringWithAggregatesFilter<"AboutPageTeamHeading"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AboutPageTeamHeading"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AboutPageTeamHeading"> | Date | string
  }

  export type AboutPageTeamWhereInput = {
    AND?: AboutPageTeamWhereInput | AboutPageTeamWhereInput[]
    OR?: AboutPageTeamWhereInput[]
    NOT?: AboutPageTeamWhereInput | AboutPageTeamWhereInput[]
    id?: StringFilter<"AboutPageTeam"> | string
    lang?: StringFilter<"AboutPageTeam"> | string
    image?: StringFilter<"AboutPageTeam"> | string
    name?: StringFilter<"AboutPageTeam"> | string
    profession?: StringFilter<"AboutPageTeam"> | string
    createdAt?: DateTimeFilter<"AboutPageTeam"> | Date | string
    updatedAt?: DateTimeFilter<"AboutPageTeam"> | Date | string
  }

  export type AboutPageTeamOrderByWithRelationInput = {
    id?: SortOrder
    lang?: SortOrder
    image?: SortOrder
    name?: SortOrder
    profession?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutPageTeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AboutPageTeamWhereInput | AboutPageTeamWhereInput[]
    OR?: AboutPageTeamWhereInput[]
    NOT?: AboutPageTeamWhereInput | AboutPageTeamWhereInput[]
    lang?: StringFilter<"AboutPageTeam"> | string
    image?: StringFilter<"AboutPageTeam"> | string
    name?: StringFilter<"AboutPageTeam"> | string
    profession?: StringFilter<"AboutPageTeam"> | string
    createdAt?: DateTimeFilter<"AboutPageTeam"> | Date | string
    updatedAt?: DateTimeFilter<"AboutPageTeam"> | Date | string
  }, "id">

  export type AboutPageTeamOrderByWithAggregationInput = {
    id?: SortOrder
    lang?: SortOrder
    image?: SortOrder
    name?: SortOrder
    profession?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AboutPageTeamCountOrderByAggregateInput
    _max?: AboutPageTeamMaxOrderByAggregateInput
    _min?: AboutPageTeamMinOrderByAggregateInput
  }

  export type AboutPageTeamScalarWhereWithAggregatesInput = {
    AND?: AboutPageTeamScalarWhereWithAggregatesInput | AboutPageTeamScalarWhereWithAggregatesInput[]
    OR?: AboutPageTeamScalarWhereWithAggregatesInput[]
    NOT?: AboutPageTeamScalarWhereWithAggregatesInput | AboutPageTeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AboutPageTeam"> | string
    lang?: StringWithAggregatesFilter<"AboutPageTeam"> | string
    image?: StringWithAggregatesFilter<"AboutPageTeam"> | string
    name?: StringWithAggregatesFilter<"AboutPageTeam"> | string
    profession?: StringWithAggregatesFilter<"AboutPageTeam"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AboutPageTeam"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AboutPageTeam"> | Date | string
  }

  export type ContactPageContentWhereInput = {
    AND?: ContactPageContentWhereInput | ContactPageContentWhereInput[]
    OR?: ContactPageContentWhereInput[]
    NOT?: ContactPageContentWhereInput | ContactPageContentWhereInput[]
    id?: StringFilter<"ContactPageContent"> | string
    lang?: StringFilter<"ContactPageContent"> | string
    title?: StringFilter<"ContactPageContent"> | string
    name_placeholder?: StringFilter<"ContactPageContent"> | string
    email_placeholder?: StringFilter<"ContactPageContent"> | string
    message_placeholder?: StringFilter<"ContactPageContent"> | string
    btn_text?: StringFilter<"ContactPageContent"> | string
    successful_text?: StringFilter<"ContactPageContent"> | string
    error_text?: StringFilter<"ContactPageContent"> | string
    createdAt?: DateTimeFilter<"ContactPageContent"> | Date | string
    updatedAt?: DateTimeFilter<"ContactPageContent"> | Date | string
  }

  export type ContactPageContentOrderByWithRelationInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    name_placeholder?: SortOrder
    email_placeholder?: SortOrder
    message_placeholder?: SortOrder
    btn_text?: SortOrder
    successful_text?: SortOrder
    error_text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactPageContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactPageContentWhereInput | ContactPageContentWhereInput[]
    OR?: ContactPageContentWhereInput[]
    NOT?: ContactPageContentWhereInput | ContactPageContentWhereInput[]
    lang?: StringFilter<"ContactPageContent"> | string
    title?: StringFilter<"ContactPageContent"> | string
    name_placeholder?: StringFilter<"ContactPageContent"> | string
    email_placeholder?: StringFilter<"ContactPageContent"> | string
    message_placeholder?: StringFilter<"ContactPageContent"> | string
    btn_text?: StringFilter<"ContactPageContent"> | string
    successful_text?: StringFilter<"ContactPageContent"> | string
    error_text?: StringFilter<"ContactPageContent"> | string
    createdAt?: DateTimeFilter<"ContactPageContent"> | Date | string
    updatedAt?: DateTimeFilter<"ContactPageContent"> | Date | string
  }, "id">

  export type ContactPageContentOrderByWithAggregationInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    name_placeholder?: SortOrder
    email_placeholder?: SortOrder
    message_placeholder?: SortOrder
    btn_text?: SortOrder
    successful_text?: SortOrder
    error_text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactPageContentCountOrderByAggregateInput
    _max?: ContactPageContentMaxOrderByAggregateInput
    _min?: ContactPageContentMinOrderByAggregateInput
  }

  export type ContactPageContentScalarWhereWithAggregatesInput = {
    AND?: ContactPageContentScalarWhereWithAggregatesInput | ContactPageContentScalarWhereWithAggregatesInput[]
    OR?: ContactPageContentScalarWhereWithAggregatesInput[]
    NOT?: ContactPageContentScalarWhereWithAggregatesInput | ContactPageContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactPageContent"> | string
    lang?: StringWithAggregatesFilter<"ContactPageContent"> | string
    title?: StringWithAggregatesFilter<"ContactPageContent"> | string
    name_placeholder?: StringWithAggregatesFilter<"ContactPageContent"> | string
    email_placeholder?: StringWithAggregatesFilter<"ContactPageContent"> | string
    message_placeholder?: StringWithAggregatesFilter<"ContactPageContent"> | string
    btn_text?: StringWithAggregatesFilter<"ContactPageContent"> | string
    successful_text?: StringWithAggregatesFilter<"ContactPageContent"> | string
    error_text?: StringWithAggregatesFilter<"ContactPageContent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactPageContent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactPageContent"> | Date | string
  }

  export type FooterLabelWhereInput = {
    AND?: FooterLabelWhereInput | FooterLabelWhereInput[]
    OR?: FooterLabelWhereInput[]
    NOT?: FooterLabelWhereInput | FooterLabelWhereInput[]
    id?: StringFilter<"FooterLabel"> | string
    lang?: StringFilter<"FooterLabel"> | string
    title?: StringFilter<"FooterLabel"> | string
    credit?: StringFilter<"FooterLabel"> | string
    createdAt?: DateTimeFilter<"FooterLabel"> | Date | string
    updatedAt?: DateTimeFilter<"FooterLabel"> | Date | string
    social_links?: SocialLinkListRelationFilter
  }

  export type FooterLabelOrderByWithRelationInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    credit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    social_links?: SocialLinkOrderByRelationAggregateInput
  }

  export type FooterLabelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FooterLabelWhereInput | FooterLabelWhereInput[]
    OR?: FooterLabelWhereInput[]
    NOT?: FooterLabelWhereInput | FooterLabelWhereInput[]
    lang?: StringFilter<"FooterLabel"> | string
    title?: StringFilter<"FooterLabel"> | string
    credit?: StringFilter<"FooterLabel"> | string
    createdAt?: DateTimeFilter<"FooterLabel"> | Date | string
    updatedAt?: DateTimeFilter<"FooterLabel"> | Date | string
    social_links?: SocialLinkListRelationFilter
  }, "id">

  export type FooterLabelOrderByWithAggregationInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    credit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FooterLabelCountOrderByAggregateInput
    _max?: FooterLabelMaxOrderByAggregateInput
    _min?: FooterLabelMinOrderByAggregateInput
  }

  export type FooterLabelScalarWhereWithAggregatesInput = {
    AND?: FooterLabelScalarWhereWithAggregatesInput | FooterLabelScalarWhereWithAggregatesInput[]
    OR?: FooterLabelScalarWhereWithAggregatesInput[]
    NOT?: FooterLabelScalarWhereWithAggregatesInput | FooterLabelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FooterLabel"> | string
    lang?: StringWithAggregatesFilter<"FooterLabel"> | string
    title?: StringWithAggregatesFilter<"FooterLabel"> | string
    credit?: StringWithAggregatesFilter<"FooterLabel"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FooterLabel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FooterLabel"> | Date | string
  }

  export type HomePagePackageWhereInput = {
    AND?: HomePagePackageWhereInput | HomePagePackageWhereInput[]
    OR?: HomePagePackageWhereInput[]
    NOT?: HomePagePackageWhereInput | HomePagePackageWhereInput[]
    id?: StringFilter<"HomePagePackage"> | string
    lang?: StringFilter<"HomePagePackage"> | string
    discount?: StringFilter<"HomePagePackage"> | string
    image?: StringFilter<"HomePagePackage"> | string
    title?: StringFilter<"HomePagePackage"> | string
    price?: StringFilter<"HomePagePackage"> | string
    createdAt?: DateTimeFilter<"HomePagePackage"> | Date | string
    updatedAt?: DateTimeFilter<"HomePagePackage"> | Date | string
  }

  export type HomePagePackageOrderByWithRelationInput = {
    id?: SortOrder
    lang?: SortOrder
    discount?: SortOrder
    image?: SortOrder
    title?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomePagePackageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HomePagePackageWhereInput | HomePagePackageWhereInput[]
    OR?: HomePagePackageWhereInput[]
    NOT?: HomePagePackageWhereInput | HomePagePackageWhereInput[]
    lang?: StringFilter<"HomePagePackage"> | string
    discount?: StringFilter<"HomePagePackage"> | string
    image?: StringFilter<"HomePagePackage"> | string
    title?: StringFilter<"HomePagePackage"> | string
    price?: StringFilter<"HomePagePackage"> | string
    createdAt?: DateTimeFilter<"HomePagePackage"> | Date | string
    updatedAt?: DateTimeFilter<"HomePagePackage"> | Date | string
  }, "id">

  export type HomePagePackageOrderByWithAggregationInput = {
    id?: SortOrder
    lang?: SortOrder
    discount?: SortOrder
    image?: SortOrder
    title?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HomePagePackageCountOrderByAggregateInput
    _max?: HomePagePackageMaxOrderByAggregateInput
    _min?: HomePagePackageMinOrderByAggregateInput
  }

  export type HomePagePackageScalarWhereWithAggregatesInput = {
    AND?: HomePagePackageScalarWhereWithAggregatesInput | HomePagePackageScalarWhereWithAggregatesInput[]
    OR?: HomePagePackageScalarWhereWithAggregatesInput[]
    NOT?: HomePagePackageScalarWhereWithAggregatesInput | HomePagePackageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HomePagePackage"> | string
    lang?: StringWithAggregatesFilter<"HomePagePackage"> | string
    discount?: StringWithAggregatesFilter<"HomePagePackage"> | string
    image?: StringWithAggregatesFilter<"HomePagePackage"> | string
    title?: StringWithAggregatesFilter<"HomePagePackage"> | string
    price?: StringWithAggregatesFilter<"HomePagePackage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HomePagePackage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HomePagePackage"> | Date | string
  }

  export type HomePagePackagesHeadingWhereInput = {
    AND?: HomePagePackagesHeadingWhereInput | HomePagePackagesHeadingWhereInput[]
    OR?: HomePagePackagesHeadingWhereInput[]
    NOT?: HomePagePackagesHeadingWhereInput | HomePagePackagesHeadingWhereInput[]
    id?: StringFilter<"HomePagePackagesHeading"> | string
    lang?: StringFilter<"HomePagePackagesHeading"> | string
    title?: StringFilter<"HomePagePackagesHeading"> | string
    createdAt?: DateTimeFilter<"HomePagePackagesHeading"> | Date | string
    updatedAt?: DateTimeFilter<"HomePagePackagesHeading"> | Date | string
  }

  export type HomePagePackagesHeadingOrderByWithRelationInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomePagePackagesHeadingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HomePagePackagesHeadingWhereInput | HomePagePackagesHeadingWhereInput[]
    OR?: HomePagePackagesHeadingWhereInput[]
    NOT?: HomePagePackagesHeadingWhereInput | HomePagePackagesHeadingWhereInput[]
    lang?: StringFilter<"HomePagePackagesHeading"> | string
    title?: StringFilter<"HomePagePackagesHeading"> | string
    createdAt?: DateTimeFilter<"HomePagePackagesHeading"> | Date | string
    updatedAt?: DateTimeFilter<"HomePagePackagesHeading"> | Date | string
  }, "id">

  export type HomePagePackagesHeadingOrderByWithAggregationInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HomePagePackagesHeadingCountOrderByAggregateInput
    _max?: HomePagePackagesHeadingMaxOrderByAggregateInput
    _min?: HomePagePackagesHeadingMinOrderByAggregateInput
  }

  export type HomePagePackagesHeadingScalarWhereWithAggregatesInput = {
    AND?: HomePagePackagesHeadingScalarWhereWithAggregatesInput | HomePagePackagesHeadingScalarWhereWithAggregatesInput[]
    OR?: HomePagePackagesHeadingScalarWhereWithAggregatesInput[]
    NOT?: HomePagePackagesHeadingScalarWhereWithAggregatesInput | HomePagePackagesHeadingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HomePagePackagesHeading"> | string
    lang?: StringWithAggregatesFilter<"HomePagePackagesHeading"> | string
    title?: StringWithAggregatesFilter<"HomePagePackagesHeading"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HomePagePackagesHeading"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HomePagePackagesHeading"> | Date | string
  }

  export type HomePageSliderWhereInput = {
    AND?: HomePageSliderWhereInput | HomePageSliderWhereInput[]
    OR?: HomePageSliderWhereInput[]
    NOT?: HomePageSliderWhereInput | HomePageSliderWhereInput[]
    id?: StringFilter<"HomePageSlider"> | string
    lang?: StringFilter<"HomePageSlider"> | string
    img?: StringFilter<"HomePageSlider"> | string
    title?: StringFilter<"HomePageSlider"> | string
    description?: StringFilter<"HomePageSlider"> | string
    createdAt?: DateTimeFilter<"HomePageSlider"> | Date | string
    updatedAt?: DateTimeFilter<"HomePageSlider"> | Date | string
  }

  export type HomePageSliderOrderByWithRelationInput = {
    id?: SortOrder
    lang?: SortOrder
    img?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomePageSliderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HomePageSliderWhereInput | HomePageSliderWhereInput[]
    OR?: HomePageSliderWhereInput[]
    NOT?: HomePageSliderWhereInput | HomePageSliderWhereInput[]
    lang?: StringFilter<"HomePageSlider"> | string
    img?: StringFilter<"HomePageSlider"> | string
    title?: StringFilter<"HomePageSlider"> | string
    description?: StringFilter<"HomePageSlider"> | string
    createdAt?: DateTimeFilter<"HomePageSlider"> | Date | string
    updatedAt?: DateTimeFilter<"HomePageSlider"> | Date | string
  }, "id">

  export type HomePageSliderOrderByWithAggregationInput = {
    id?: SortOrder
    lang?: SortOrder
    img?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HomePageSliderCountOrderByAggregateInput
    _max?: HomePageSliderMaxOrderByAggregateInput
    _min?: HomePageSliderMinOrderByAggregateInput
  }

  export type HomePageSliderScalarWhereWithAggregatesInput = {
    AND?: HomePageSliderScalarWhereWithAggregatesInput | HomePageSliderScalarWhereWithAggregatesInput[]
    OR?: HomePageSliderScalarWhereWithAggregatesInput[]
    NOT?: HomePageSliderScalarWhereWithAggregatesInput | HomePageSliderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HomePageSlider"> | string
    lang?: StringWithAggregatesFilter<"HomePageSlider"> | string
    img?: StringWithAggregatesFilter<"HomePageSlider"> | string
    title?: StringWithAggregatesFilter<"HomePageSlider"> | string
    description?: StringWithAggregatesFilter<"HomePageSlider"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HomePageSlider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HomePageSlider"> | Date | string
  }

  export type LanguageWhereInput = {
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    id?: StringFilter<"Language"> | string
    code?: StringFilter<"Language"> | string
    createdAt?: DateTimeFilter<"Language"> | Date | string
    updatedAt?: DateTimeFilter<"Language"> | Date | string
  }

  export type LanguageOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LanguageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    code?: StringFilter<"Language"> | string
    createdAt?: DateTimeFilter<"Language"> | Date | string
    updatedAt?: DateTimeFilter<"Language"> | Date | string
  }, "id">

  export type LanguageOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LanguageCountOrderByAggregateInput
    _max?: LanguageMaxOrderByAggregateInput
    _min?: LanguageMinOrderByAggregateInput
  }

  export type LanguageScalarWhereWithAggregatesInput = {
    AND?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    OR?: LanguageScalarWhereWithAggregatesInput[]
    NOT?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Language"> | string
    code?: StringWithAggregatesFilter<"Language"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Language"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Language"> | Date | string
  }

  export type LogoWhereInput = {
    AND?: LogoWhereInput | LogoWhereInput[]
    OR?: LogoWhereInput[]
    NOT?: LogoWhereInput | LogoWhereInput[]
    id?: StringFilter<"Logo"> | string
    title?: StringFilter<"Logo"> | string
    createdAt?: DateTimeFilter<"Logo"> | Date | string
    updatedAt?: DateTimeFilter<"Logo"> | Date | string
  }

  export type LogoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LogoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogoWhereInput | LogoWhereInput[]
    OR?: LogoWhereInput[]
    NOT?: LogoWhereInput | LogoWhereInput[]
    title?: StringFilter<"Logo"> | string
    createdAt?: DateTimeFilter<"Logo"> | Date | string
    updatedAt?: DateTimeFilter<"Logo"> | Date | string
  }, "id">

  export type LogoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LogoCountOrderByAggregateInput
    _max?: LogoMaxOrderByAggregateInput
    _min?: LogoMinOrderByAggregateInput
  }

  export type LogoScalarWhereWithAggregatesInput = {
    AND?: LogoScalarWhereWithAggregatesInput | LogoScalarWhereWithAggregatesInput[]
    OR?: LogoScalarWhereWithAggregatesInput[]
    NOT?: LogoScalarWhereWithAggregatesInput | LogoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Logo"> | string
    title?: StringWithAggregatesFilter<"Logo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Logo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Logo"> | Date | string
  }

  export type NavbarWhereInput = {
    AND?: NavbarWhereInput | NavbarWhereInput[]
    OR?: NavbarWhereInput[]
    NOT?: NavbarWhereInput | NavbarWhereInput[]
    id?: StringFilter<"Navbar"> | string
    lang?: StringFilter<"Navbar"> | string
    title?: StringFilter<"Navbar"> | string
    url?: StringFilter<"Navbar"> | string
    createdAt?: DateTimeFilter<"Navbar"> | Date | string
    updatedAt?: DateTimeFilter<"Navbar"> | Date | string
  }

  export type NavbarOrderByWithRelationInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NavbarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NavbarWhereInput | NavbarWhereInput[]
    OR?: NavbarWhereInput[]
    NOT?: NavbarWhereInput | NavbarWhereInput[]
    lang?: StringFilter<"Navbar"> | string
    title?: StringFilter<"Navbar"> | string
    url?: StringFilter<"Navbar"> | string
    createdAt?: DateTimeFilter<"Navbar"> | Date | string
    updatedAt?: DateTimeFilter<"Navbar"> | Date | string
  }, "id">

  export type NavbarOrderByWithAggregationInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NavbarCountOrderByAggregateInput
    _max?: NavbarMaxOrderByAggregateInput
    _min?: NavbarMinOrderByAggregateInput
  }

  export type NavbarScalarWhereWithAggregatesInput = {
    AND?: NavbarScalarWhereWithAggregatesInput | NavbarScalarWhereWithAggregatesInput[]
    OR?: NavbarScalarWhereWithAggregatesInput[]
    NOT?: NavbarScalarWhereWithAggregatesInput | NavbarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Navbar"> | string
    lang?: StringWithAggregatesFilter<"Navbar"> | string
    title?: StringWithAggregatesFilter<"Navbar"> | string
    url?: StringWithAggregatesFilter<"Navbar"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Navbar"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Navbar"> | Date | string
  }

  export type SocialLinkWhereInput = {
    AND?: SocialLinkWhereInput | SocialLinkWhereInput[]
    OR?: SocialLinkWhereInput[]
    NOT?: SocialLinkWhereInput | SocialLinkWhereInput[]
    id?: StringFilter<"SocialLink"> | string
    image?: StringFilter<"SocialLink"> | string
    url?: StringFilter<"SocialLink"> | string
    footerLabelId?: StringFilter<"SocialLink"> | string
    createdAt?: DateTimeFilter<"SocialLink"> | Date | string
    updatedAt?: DateTimeFilter<"SocialLink"> | Date | string
    footerLabel?: XOR<FooterLabelScalarRelationFilter, FooterLabelWhereInput>
  }

  export type SocialLinkOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    url?: SortOrder
    footerLabelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    footerLabel?: FooterLabelOrderByWithRelationInput
  }

  export type SocialLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SocialLinkWhereInput | SocialLinkWhereInput[]
    OR?: SocialLinkWhereInput[]
    NOT?: SocialLinkWhereInput | SocialLinkWhereInput[]
    image?: StringFilter<"SocialLink"> | string
    url?: StringFilter<"SocialLink"> | string
    footerLabelId?: StringFilter<"SocialLink"> | string
    createdAt?: DateTimeFilter<"SocialLink"> | Date | string
    updatedAt?: DateTimeFilter<"SocialLink"> | Date | string
    footerLabel?: XOR<FooterLabelScalarRelationFilter, FooterLabelWhereInput>
  }, "id">

  export type SocialLinkOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    url?: SortOrder
    footerLabelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SocialLinkCountOrderByAggregateInput
    _max?: SocialLinkMaxOrderByAggregateInput
    _min?: SocialLinkMinOrderByAggregateInput
  }

  export type SocialLinkScalarWhereWithAggregatesInput = {
    AND?: SocialLinkScalarWhereWithAggregatesInput | SocialLinkScalarWhereWithAggregatesInput[]
    OR?: SocialLinkScalarWhereWithAggregatesInput[]
    NOT?: SocialLinkScalarWhereWithAggregatesInput | SocialLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SocialLink"> | string
    image?: StringWithAggregatesFilter<"SocialLink"> | string
    url?: StringWithAggregatesFilter<"SocialLink"> | string
    footerLabelId?: StringWithAggregatesFilter<"SocialLink"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SocialLink"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SocialLink"> | Date | string
  }

  export type User_sessionWhereInput = {
    AND?: User_sessionWhereInput | User_sessionWhereInput[]
    OR?: User_sessionWhereInput[]
    NOT?: User_sessionWhereInput | User_sessionWhereInput[]
    sid?: StringFilter<"User_session"> | string
    expire?: DateTimeFilter<"User_session"> | Date | string
    sess?: JsonFilter<"User_session">
  }

  export type User_sessionOrderByWithRelationInput = {
    sid?: SortOrder
    expire?: SortOrder
    sess?: SortOrder
  }

  export type User_sessionWhereUniqueInput = Prisma.AtLeast<{
    sid?: string
    AND?: User_sessionWhereInput | User_sessionWhereInput[]
    OR?: User_sessionWhereInput[]
    NOT?: User_sessionWhereInput | User_sessionWhereInput[]
    expire?: DateTimeFilter<"User_session"> | Date | string
    sess?: JsonFilter<"User_session">
  }, "sid">

  export type User_sessionOrderByWithAggregationInput = {
    sid?: SortOrder
    expire?: SortOrder
    sess?: SortOrder
    _count?: User_sessionCountOrderByAggregateInput
    _max?: User_sessionMaxOrderByAggregateInput
    _min?: User_sessionMinOrderByAggregateInput
  }

  export type User_sessionScalarWhereWithAggregatesInput = {
    AND?: User_sessionScalarWhereWithAggregatesInput | User_sessionScalarWhereWithAggregatesInput[]
    OR?: User_sessionScalarWhereWithAggregatesInput[]
    NOT?: User_sessionScalarWhereWithAggregatesInput | User_sessionScalarWhereWithAggregatesInput[]
    sid?: StringWithAggregatesFilter<"User_session"> | string
    expire?: DateTimeWithAggregatesFilter<"User_session"> | Date | string
    sess?: JsonWithAggregatesFilter<"User_session">
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AboutPageIntroCreateInput = {
    id?: string
    lang: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutPageIntroUncheckedCreateInput = {
    id?: string
    lang: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutPageIntroUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutPageIntroUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutPageIntroCreateManyInput = {
    id?: string
    lang: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutPageIntroUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutPageIntroUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutPageTeamHeadingCreateInput = {
    id?: string
    lang: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutPageTeamHeadingUncheckedCreateInput = {
    id?: string
    lang: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutPageTeamHeadingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutPageTeamHeadingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutPageTeamHeadingCreateManyInput = {
    id?: string
    lang: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutPageTeamHeadingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutPageTeamHeadingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutPageTeamCreateInput = {
    id?: string
    lang: string
    image: string
    name: string
    profession: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutPageTeamUncheckedCreateInput = {
    id?: string
    lang: string
    image: string
    name: string
    profession: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutPageTeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutPageTeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutPageTeamCreateManyInput = {
    id?: string
    lang: string
    image: string
    name: string
    profession: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutPageTeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutPageTeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactPageContentCreateInput = {
    id?: string
    lang: string
    title: string
    name_placeholder: string
    email_placeholder: string
    message_placeholder: string
    btn_text: string
    successful_text: string
    error_text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactPageContentUncheckedCreateInput = {
    id?: string
    lang: string
    title: string
    name_placeholder: string
    email_placeholder: string
    message_placeholder: string
    btn_text: string
    successful_text: string
    error_text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactPageContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    name_placeholder?: StringFieldUpdateOperationsInput | string
    email_placeholder?: StringFieldUpdateOperationsInput | string
    message_placeholder?: StringFieldUpdateOperationsInput | string
    btn_text?: StringFieldUpdateOperationsInput | string
    successful_text?: StringFieldUpdateOperationsInput | string
    error_text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactPageContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    name_placeholder?: StringFieldUpdateOperationsInput | string
    email_placeholder?: StringFieldUpdateOperationsInput | string
    message_placeholder?: StringFieldUpdateOperationsInput | string
    btn_text?: StringFieldUpdateOperationsInput | string
    successful_text?: StringFieldUpdateOperationsInput | string
    error_text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactPageContentCreateManyInput = {
    id?: string
    lang: string
    title: string
    name_placeholder: string
    email_placeholder: string
    message_placeholder: string
    btn_text: string
    successful_text: string
    error_text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactPageContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    name_placeholder?: StringFieldUpdateOperationsInput | string
    email_placeholder?: StringFieldUpdateOperationsInput | string
    message_placeholder?: StringFieldUpdateOperationsInput | string
    btn_text?: StringFieldUpdateOperationsInput | string
    successful_text?: StringFieldUpdateOperationsInput | string
    error_text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactPageContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    name_placeholder?: StringFieldUpdateOperationsInput | string
    email_placeholder?: StringFieldUpdateOperationsInput | string
    message_placeholder?: StringFieldUpdateOperationsInput | string
    btn_text?: StringFieldUpdateOperationsInput | string
    successful_text?: StringFieldUpdateOperationsInput | string
    error_text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterLabelCreateInput = {
    id?: string
    lang: string
    title: string
    credit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    social_links?: SocialLinkCreateNestedManyWithoutFooterLabelInput
  }

  export type FooterLabelUncheckedCreateInput = {
    id?: string
    lang: string
    title: string
    credit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    social_links?: SocialLinkUncheckedCreateNestedManyWithoutFooterLabelInput
  }

  export type FooterLabelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    credit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    social_links?: SocialLinkUpdateManyWithoutFooterLabelNestedInput
  }

  export type FooterLabelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    credit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    social_links?: SocialLinkUncheckedUpdateManyWithoutFooterLabelNestedInput
  }

  export type FooterLabelCreateManyInput = {
    id?: string
    lang: string
    title: string
    credit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FooterLabelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    credit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterLabelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    credit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomePagePackageCreateInput = {
    id?: string
    lang: string
    discount: string
    image: string
    title: string
    price: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomePagePackageUncheckedCreateInput = {
    id?: string
    lang: string
    discount: string
    image: string
    title: string
    price: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomePagePackageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    discount?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomePagePackageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    discount?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomePagePackageCreateManyInput = {
    id?: string
    lang: string
    discount: string
    image: string
    title: string
    price: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomePagePackageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    discount?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomePagePackageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    discount?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomePagePackagesHeadingCreateInput = {
    id?: string
    lang: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomePagePackagesHeadingUncheckedCreateInput = {
    id?: string
    lang: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomePagePackagesHeadingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomePagePackagesHeadingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomePagePackagesHeadingCreateManyInput = {
    id?: string
    lang: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomePagePackagesHeadingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomePagePackagesHeadingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomePageSliderCreateInput = {
    id?: string
    lang: string
    img: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomePageSliderUncheckedCreateInput = {
    id?: string
    lang: string
    img: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomePageSliderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomePageSliderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomePageSliderCreateManyInput = {
    id?: string
    lang: string
    img: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomePageSliderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomePageSliderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageCreateInput = {
    id?: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LanguageUncheckedCreateInput = {
    id?: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LanguageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageCreateManyInput = {
    id?: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LanguageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogoCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LogoUncheckedCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LogoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogoCreateManyInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LogoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavbarCreateInput = {
    id?: string
    lang: string
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NavbarUncheckedCreateInput = {
    id?: string
    lang: string
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NavbarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavbarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavbarCreateManyInput = {
    id?: string
    lang: string
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NavbarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavbarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkCreateInput = {
    id?: string
    image: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    footerLabel: FooterLabelCreateNestedOneWithoutSocial_linksInput
  }

  export type SocialLinkUncheckedCreateInput = {
    id?: string
    image: string
    url: string
    footerLabelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    footerLabel?: FooterLabelUpdateOneRequiredWithoutSocial_linksNestedInput
  }

  export type SocialLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    footerLabelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkCreateManyInput = {
    id?: string
    image: string
    url: string
    footerLabelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    footerLabelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_sessionCreateInput = {
    sid: string
    expire: Date | string
    sess: JsonNullValueInput | InputJsonValue
  }

  export type User_sessionUncheckedCreateInput = {
    sid: string
    expire: Date | string
    sess: JsonNullValueInput | InputJsonValue
  }

  export type User_sessionUpdateInput = {
    sid?: StringFieldUpdateOperationsInput | string
    expire?: DateTimeFieldUpdateOperationsInput | Date | string
    sess?: JsonNullValueInput | InputJsonValue
  }

  export type User_sessionUncheckedUpdateInput = {
    sid?: StringFieldUpdateOperationsInput | string
    expire?: DateTimeFieldUpdateOperationsInput | Date | string
    sess?: JsonNullValueInput | InputJsonValue
  }

  export type User_sessionCreateManyInput = {
    sid: string
    expire: Date | string
    sess: JsonNullValueInput | InputJsonValue
  }

  export type User_sessionUpdateManyMutationInput = {
    sid?: StringFieldUpdateOperationsInput | string
    expire?: DateTimeFieldUpdateOperationsInput | Date | string
    sess?: JsonNullValueInput | InputJsonValue
  }

  export type User_sessionUncheckedUpdateManyInput = {
    sid?: StringFieldUpdateOperationsInput | string
    expire?: DateTimeFieldUpdateOperationsInput | Date | string
    sess?: JsonNullValueInput | InputJsonValue
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AboutPageIntroCountOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutPageIntroMaxOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutPageIntroMinOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AboutPageTeamHeadingCountOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutPageTeamHeadingMaxOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutPageTeamHeadingMinOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutPageTeamCountOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    image?: SortOrder
    name?: SortOrder
    profession?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutPageTeamMaxOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    image?: SortOrder
    name?: SortOrder
    profession?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutPageTeamMinOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    image?: SortOrder
    name?: SortOrder
    profession?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactPageContentCountOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    name_placeholder?: SortOrder
    email_placeholder?: SortOrder
    message_placeholder?: SortOrder
    btn_text?: SortOrder
    successful_text?: SortOrder
    error_text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactPageContentMaxOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    name_placeholder?: SortOrder
    email_placeholder?: SortOrder
    message_placeholder?: SortOrder
    btn_text?: SortOrder
    successful_text?: SortOrder
    error_text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactPageContentMinOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    name_placeholder?: SortOrder
    email_placeholder?: SortOrder
    message_placeholder?: SortOrder
    btn_text?: SortOrder
    successful_text?: SortOrder
    error_text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialLinkListRelationFilter = {
    every?: SocialLinkWhereInput
    some?: SocialLinkWhereInput
    none?: SocialLinkWhereInput
  }

  export type SocialLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FooterLabelCountOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    credit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterLabelMaxOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    credit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterLabelMinOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    credit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomePagePackageCountOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    discount?: SortOrder
    image?: SortOrder
    title?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomePagePackageMaxOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    discount?: SortOrder
    image?: SortOrder
    title?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomePagePackageMinOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    discount?: SortOrder
    image?: SortOrder
    title?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomePagePackagesHeadingCountOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomePagePackagesHeadingMaxOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomePagePackagesHeadingMinOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomePageSliderCountOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    img?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomePageSliderMaxOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    img?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomePageSliderMinOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    img?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LanguageCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LanguageMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LanguageMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LogoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LogoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LogoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NavbarCountOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NavbarMaxOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NavbarMinOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterLabelScalarRelationFilter = {
    is?: FooterLabelWhereInput
    isNot?: FooterLabelWhereInput
  }

  export type SocialLinkCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    url?: SortOrder
    footerLabelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    url?: SortOrder
    footerLabelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialLinkMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    url?: SortOrder
    footerLabelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type User_sessionCountOrderByAggregateInput = {
    sid?: SortOrder
    expire?: SortOrder
    sess?: SortOrder
  }

  export type User_sessionMaxOrderByAggregateInput = {
    sid?: SortOrder
    expire?: SortOrder
  }

  export type User_sessionMinOrderByAggregateInput = {
    sid?: SortOrder
    expire?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SocialLinkCreateNestedManyWithoutFooterLabelInput = {
    create?: XOR<SocialLinkCreateWithoutFooterLabelInput, SocialLinkUncheckedCreateWithoutFooterLabelInput> | SocialLinkCreateWithoutFooterLabelInput[] | SocialLinkUncheckedCreateWithoutFooterLabelInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutFooterLabelInput | SocialLinkCreateOrConnectWithoutFooterLabelInput[]
    createMany?: SocialLinkCreateManyFooterLabelInputEnvelope
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
  }

  export type SocialLinkUncheckedCreateNestedManyWithoutFooterLabelInput = {
    create?: XOR<SocialLinkCreateWithoutFooterLabelInput, SocialLinkUncheckedCreateWithoutFooterLabelInput> | SocialLinkCreateWithoutFooterLabelInput[] | SocialLinkUncheckedCreateWithoutFooterLabelInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutFooterLabelInput | SocialLinkCreateOrConnectWithoutFooterLabelInput[]
    createMany?: SocialLinkCreateManyFooterLabelInputEnvelope
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
  }

  export type SocialLinkUpdateManyWithoutFooterLabelNestedInput = {
    create?: XOR<SocialLinkCreateWithoutFooterLabelInput, SocialLinkUncheckedCreateWithoutFooterLabelInput> | SocialLinkCreateWithoutFooterLabelInput[] | SocialLinkUncheckedCreateWithoutFooterLabelInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutFooterLabelInput | SocialLinkCreateOrConnectWithoutFooterLabelInput[]
    upsert?: SocialLinkUpsertWithWhereUniqueWithoutFooterLabelInput | SocialLinkUpsertWithWhereUniqueWithoutFooterLabelInput[]
    createMany?: SocialLinkCreateManyFooterLabelInputEnvelope
    set?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    disconnect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    delete?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    update?: SocialLinkUpdateWithWhereUniqueWithoutFooterLabelInput | SocialLinkUpdateWithWhereUniqueWithoutFooterLabelInput[]
    updateMany?: SocialLinkUpdateManyWithWhereWithoutFooterLabelInput | SocialLinkUpdateManyWithWhereWithoutFooterLabelInput[]
    deleteMany?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
  }

  export type SocialLinkUncheckedUpdateManyWithoutFooterLabelNestedInput = {
    create?: XOR<SocialLinkCreateWithoutFooterLabelInput, SocialLinkUncheckedCreateWithoutFooterLabelInput> | SocialLinkCreateWithoutFooterLabelInput[] | SocialLinkUncheckedCreateWithoutFooterLabelInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutFooterLabelInput | SocialLinkCreateOrConnectWithoutFooterLabelInput[]
    upsert?: SocialLinkUpsertWithWhereUniqueWithoutFooterLabelInput | SocialLinkUpsertWithWhereUniqueWithoutFooterLabelInput[]
    createMany?: SocialLinkCreateManyFooterLabelInputEnvelope
    set?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    disconnect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    delete?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    update?: SocialLinkUpdateWithWhereUniqueWithoutFooterLabelInput | SocialLinkUpdateWithWhereUniqueWithoutFooterLabelInput[]
    updateMany?: SocialLinkUpdateManyWithWhereWithoutFooterLabelInput | SocialLinkUpdateManyWithWhereWithoutFooterLabelInput[]
    deleteMany?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
  }

  export type FooterLabelCreateNestedOneWithoutSocial_linksInput = {
    create?: XOR<FooterLabelCreateWithoutSocial_linksInput, FooterLabelUncheckedCreateWithoutSocial_linksInput>
    connectOrCreate?: FooterLabelCreateOrConnectWithoutSocial_linksInput
    connect?: FooterLabelWhereUniqueInput
  }

  export type FooterLabelUpdateOneRequiredWithoutSocial_linksNestedInput = {
    create?: XOR<FooterLabelCreateWithoutSocial_linksInput, FooterLabelUncheckedCreateWithoutSocial_linksInput>
    connectOrCreate?: FooterLabelCreateOrConnectWithoutSocial_linksInput
    upsert?: FooterLabelUpsertWithoutSocial_linksInput
    connect?: FooterLabelWhereUniqueInput
    update?: XOR<XOR<FooterLabelUpdateToOneWithWhereWithoutSocial_linksInput, FooterLabelUpdateWithoutSocial_linksInput>, FooterLabelUncheckedUpdateWithoutSocial_linksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SocialLinkCreateWithoutFooterLabelInput = {
    id?: string
    image: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialLinkUncheckedCreateWithoutFooterLabelInput = {
    id?: string
    image: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialLinkCreateOrConnectWithoutFooterLabelInput = {
    where: SocialLinkWhereUniqueInput
    create: XOR<SocialLinkCreateWithoutFooterLabelInput, SocialLinkUncheckedCreateWithoutFooterLabelInput>
  }

  export type SocialLinkCreateManyFooterLabelInputEnvelope = {
    data: SocialLinkCreateManyFooterLabelInput | SocialLinkCreateManyFooterLabelInput[]
    skipDuplicates?: boolean
  }

  export type SocialLinkUpsertWithWhereUniqueWithoutFooterLabelInput = {
    where: SocialLinkWhereUniqueInput
    update: XOR<SocialLinkUpdateWithoutFooterLabelInput, SocialLinkUncheckedUpdateWithoutFooterLabelInput>
    create: XOR<SocialLinkCreateWithoutFooterLabelInput, SocialLinkUncheckedCreateWithoutFooterLabelInput>
  }

  export type SocialLinkUpdateWithWhereUniqueWithoutFooterLabelInput = {
    where: SocialLinkWhereUniqueInput
    data: XOR<SocialLinkUpdateWithoutFooterLabelInput, SocialLinkUncheckedUpdateWithoutFooterLabelInput>
  }

  export type SocialLinkUpdateManyWithWhereWithoutFooterLabelInput = {
    where: SocialLinkScalarWhereInput
    data: XOR<SocialLinkUpdateManyMutationInput, SocialLinkUncheckedUpdateManyWithoutFooterLabelInput>
  }

  export type SocialLinkScalarWhereInput = {
    AND?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
    OR?: SocialLinkScalarWhereInput[]
    NOT?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
    id?: StringFilter<"SocialLink"> | string
    image?: StringFilter<"SocialLink"> | string
    url?: StringFilter<"SocialLink"> | string
    footerLabelId?: StringFilter<"SocialLink"> | string
    createdAt?: DateTimeFilter<"SocialLink"> | Date | string
    updatedAt?: DateTimeFilter<"SocialLink"> | Date | string
  }

  export type FooterLabelCreateWithoutSocial_linksInput = {
    id?: string
    lang: string
    title: string
    credit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FooterLabelUncheckedCreateWithoutSocial_linksInput = {
    id?: string
    lang: string
    title: string
    credit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FooterLabelCreateOrConnectWithoutSocial_linksInput = {
    where: FooterLabelWhereUniqueInput
    create: XOR<FooterLabelCreateWithoutSocial_linksInput, FooterLabelUncheckedCreateWithoutSocial_linksInput>
  }

  export type FooterLabelUpsertWithoutSocial_linksInput = {
    update: XOR<FooterLabelUpdateWithoutSocial_linksInput, FooterLabelUncheckedUpdateWithoutSocial_linksInput>
    create: XOR<FooterLabelCreateWithoutSocial_linksInput, FooterLabelUncheckedCreateWithoutSocial_linksInput>
    where?: FooterLabelWhereInput
  }

  export type FooterLabelUpdateToOneWithWhereWithoutSocial_linksInput = {
    where?: FooterLabelWhereInput
    data: XOR<FooterLabelUpdateWithoutSocial_linksInput, FooterLabelUncheckedUpdateWithoutSocial_linksInput>
  }

  export type FooterLabelUpdateWithoutSocial_linksInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    credit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterLabelUncheckedUpdateWithoutSocial_linksInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    credit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkCreateManyFooterLabelInput = {
    id?: string
    image: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialLinkUpdateWithoutFooterLabelInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkUncheckedUpdateWithoutFooterLabelInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkUncheckedUpdateManyWithoutFooterLabelInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}