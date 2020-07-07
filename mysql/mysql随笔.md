# mysql
## 数据库概括

### 数据库概念
### 常见数据库
### 相关术语
### sql语句规范

## mysql操作

### 数据库服务控制
启动：net start mysql服务名称
停止：net start mysql服务名称
### 数据库的登录
mysql -h主机地址 -p端口 -u用户名 -p密码
### 数据库的退出
exit;
quit;
\q;

## 数据库相关的操作
### 显示所有数据库
show databases
### 选择数据库
use 数据库名
### 创建数据库
create database 数据库名称 charset 编码格式
### 删除数据库
drop database 数据库名称

## 数据表的操作
显示数据库下面所有表
show tables
查看表结构
desc 表的名字
查看表的创建过程
show create table 表的名称
创建表
create table 数据库名.表名（字段 字段类型 约束）
修改表
修改表之修改列
减少列
alter table 表名 drop 列名称
增加列
alter table 表名 add 列名 列类型 约束
增加主键
alter table 表名 add primary key(字段)
删除主键
alter table 表名 drop primary key
修改表之修改表名
rename table 旧 to 新 该字段名:
alter table 表名 change 旧 新 字段类型 
改字段类型：alter table 表名 modify 字段名 字段类型
删除表
drop table 表名

## 数据的操作
### 增 
指定字段
insert into 表名(字段,字段...)values(值,值...)
不指定字段 insert into 表名 values(值，值...),(值，值...)
### 删
delete from 表名[where 条件] 
delete from 表名;
### 改
update 表名 set 字段名称=字段值 [where 筛选条件]
### 查
select 查询列表
from 表1 别名
on 连接条件
[where 筛选条件]
[group by 分组列表]
[having 筛选条件]
[order by 排序字段 [desc||asc]]
[limit 偏移.个数]offset,size
#### 查询表中所有的记录
select * from 表名 * 代表所有字段
#### 获取指定字段的信息
select 字段名，字段名，...from 表名
库名.表名
给字段起别名
给数据表起别名 select 字段名 from 表名 as 别名

#### where条件查询
比较运算符 
逻辑运算符
模糊查询
区间单词 between and
范围单词 IN
范围单词 NOT

group by 

having

order by

limit 分页

内连接

外连接

交叉连接

子查询

## 数据类型
concat()连接两个字段
length()字符串的长度
substr()截取字符串
replace()字符串替换
trim()去除字符串两边的空格
lower和upper转换大小写
lpad和rpad左填充和右填充
## 常用函数

### 字符串函数
concat()连接两个字段
length()字符串的长度
substr()截取子字符串
replace()字符串替换
trim()去除字符串两边的空格
lower和upper转换大小写
lpad和rpad左填充和右填充
### 聚合函数
sum()求和函数
avg()求平均数
min()最小值
max()最大值
count()计数器
### 数据函数
ceil()向上取整
floor()向下取整
round()四舍五入
mod()取余数
truncate()截取小数点后几位
### 日历函数

### 其他函数

