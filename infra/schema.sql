CREATE DATABASE IF NOT EXISTS `testing`;
USE `testing`;
drop table if exists `users`;
create table `users` (
    `user_id` int(10) unsigned not null AUTO_INCREMENT,
    `name` varchar(255) not null,
    primary key (`user_id`)
);