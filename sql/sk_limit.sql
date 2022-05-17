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

 Date: 16/04/2022 17:21:18
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sk_limit
-- ----------------------------
DROP TABLE IF EXISTS `sk_limit`;
CREATE TABLE `sk_limit`  (
  `credit` int(11) NOT NULL COMMENT '最小信誉度',
  `age` int(11) NOT NULL COMMENT '最小年龄',
  PRIMARY KEY (`age`) USING BTREE,
  INDEX `age`(`age`) USING BTREE,
  INDEX `age_2`(`age`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sk_limit
-- ----------------------------
INSERT INTO `sk_limit` VALUES (0, 16);

SET FOREIGN_KEY_CHECKS = 1;
