# Insurance Management System

A third-year university coursework project with a Thai-language interface for managing insurance-related records. The frontend uses **Ionic / Angular (TypeScript)** and communicates with a **PHP / MySQL** backend through HTTP requests.

## Features represented in the source

- Customer and insurance agent listing and entry forms
- Insurance product and policy listing and entry forms
- Claims and policy–agent relationships
- Angular routing between screens
- HTTP communication with PHP endpoints

## Project structure

```text
src/                  Ionic / Angular frontend source
insurance/            PHP API endpoints and database connection
database/schema.sql   MySQL table definitions, without original records
```

## Project status

This repository preserves the selected final coursework source snapshot. The supplied archive did **not** include `package.json`, a dependency lockfile, `angular.json`, or TypeScript workspace configuration. It is therefore **not a standalone runnable Angular workspace**, and a frontend build has not been verified. Restore the original workspace configuration and matching dependency versions before running it.

This is a learning project, not a production service. The backend still needs input validation, parameterized SQL throughout, authentication/authorization and restricted CORS before deployment. Some insert endpoints interpolate request values into SQL. Do not expose these endpoints publicly or use real customer data.

## Local setup outline

1. Restore the missing Ionic / Angular workspace files from the original project.
2. Create a local MySQL database named `insurance` and import `database/schema.sql`. No customer records or sample records are included.
3. Enable PHP PDO MySQL and serve the `insurance/` directory locally. Frontend requests currently point to `http://localhost/insurance/`.
4. Configure the PHP process environment as needed:

   | Variable | Local default |
   | --- | --- |
   | `DB_HOST` | `localhost` |
   | `DB_PORT` | `3306` |
   | `DB_NAME` | `insurance` |
   | `DB_USER` | `root` |
   | `DB_PASSWORD` | empty |

   Use a dedicated local database account. `conn.php` reads process environment variables directly; it does not automatically load a `.env` file.

5. Install dependencies and run the frontend using the restored workspace's scripts. Add synthetic test records only.

## About this portfolio copy

The source comes from the final version selected by Tanakorn Sukhom. Publication preparation removed database records, normalized line endings, added documentation and ignore rules, and made the PHP connection configurable through environment variables. 

This repository demonstrates coursework code and does not claim that every feature has been tested or deployed. Specific individual contributions in any group work should be described separately.

---

**ภาษาไทย:** โปรเจกต์รายวิชาชั้นปีที่ 3 สำหรับจัดการข้อมูลประกันภัย พัฒนาด้วย Ionic/Angular, PHP และ MySQL ฉบับนี้ตัดข้อมูลในฐานข้อมูลออกแล้ว เหลือเฉพาะโครงสร้างตาราง ไฟล์ตั้งค่า workspace ต้นฉบับยังไม่ครบ จึงยังไม่สามารถสั่งติดตั้งและรันจาก repository นี้โดยตรงได้
