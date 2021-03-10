# Create users

```
CREATE USER Esteban WITH password '123';
```

# Create database

```
CREATE DATABASE Users_api WITH OWNER Esteban;
```

# See databases

```
\l
```

# Use database

```
\c users_api
```

# See tables

```
\dt
```

# Conection at data base

```
psql -h localhost -U esteban -d test_api
```

# stop services psql

```
sudo service postgresql stop
```
