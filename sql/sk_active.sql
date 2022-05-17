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

 Date: 16/04/2022 17:20:07
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sk_active
-- ----------------------------
DROP TABLE IF EXISTS `sk_active`;
CREATE TABLE `sk_active`  (
  `active_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '活动id',
  `active_title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '活动名称',
  `time_begin` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '开始时间',
  `time_end` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '结束时间',
  `sys_dateline` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '创建时间',
  `sys_lastmodify` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '最后修改时间',
  `sys_status` int(10) NULL DEFAULT 0 COMMENT '状态：0待上线 1已上线 2已下线',
  PRIMARY KEY (`active_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sk_active
-- ----------------------------
INSERT INTO `sk_active` VALUES (1, '限时回馈秒杀', 1646496000, 1651701600, 1646564400, 1650100360, 1);
INSERT INTO `sk_active` VALUES (4, '春季秒杀场', 1646517600, 1651158120, 1646831583, 1649953144, 1);
INSERT INTO `sk_active` VALUES (5, '春季秒杀返场', 1646517600, 1652007600, 1646873901, 1650100396, 1);
INSERT INTO `sk_active` VALUES (6, '春季秒杀预热场', 1646517600, 1649070300, 1647000770, 1649070160, 1);
INSERT INTO `sk_active` VALUES (7, '秒杀活动限时场', 1649217600, 1649764860, 1647140060, 1649157003, 1);
INSERT INTO `sk_active` VALUES (8, '四月秒杀', 1649250720, 1649337180, 1649157046, 1649316467, 1);

SET FOREIGN_KEY_CHECKS = 1;
