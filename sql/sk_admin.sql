/*
 Navicat Premium Data Transfer

 Source Server         : fcds
 Source Server Type    : MySQL
 Source Server Version : 50730
 Source Host           : 172.31.32.232:3306
 Source Schema         : sxfcds2100850

 Target Server Type    : MySQL
 Target Server Version : 50730
 File Encoding         : 65001

 Date: 16/04/2022 17:20:51
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sk_admin
-- ----------------------------
DROP TABLE IF EXISTS `sk_admin`;
CREATE TABLE `sk_admin`  (
  `username` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`username`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sk_admin
-- ----------------------------
INSERT INTO `sk_admin` VALUES ('admin', 'admin');

SET FOREIGN_KEY_CHECKS = 1;
