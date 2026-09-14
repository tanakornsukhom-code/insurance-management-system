# db.py
import mysql.connector
from mysql.connector import Error

DB_CONFIG = {
    "host": "localhost",
    "user": "root",
    "password": "",      # ใส่รหัสผ่าน MySQL 
    "database": "university",
    "port": 3306,
    "autocommit": False
}

def get_conn():
    return mysql.connector.connect(**DB_CONFIG)

def fetch_all(sql: str, params=None):
    conn = get_conn()
    cur = conn.cursor(dictionary=True)
    try:
        cur.execute(sql, params or ())
        return cur.fetchall()
    finally:
        cur.close()
        conn.close()

def execute(sql: str, params=None):
    conn = get_conn()
    cur = conn.cursor()
    try:
        cur.execute(sql, params or ())
        conn.commit()
        return cur.rowcount
    except Error:
        conn.rollback()
        raise
    finally:
        cur.close()
        conn.close()
