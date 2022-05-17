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

 Date: 16/04/2022 17:21:01
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sk_bank
-- ----------------------------
DROP TABLE IF EXISTS `sk_bank`;
CREATE TABLE `sk_bank`  (
  `mybank` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'bank总账户名字',
  `account` int(10) NOT NULL DEFAULT 0 COMMENT '余额',
  PRIMARY KEY (`mybank`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sk_bank
-- ----------------------------
INSERT INTO `sk_bank` VALUES ('A22mybank', 0);

SET FOREIGN_KEY_CHECKS = 1;
