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

 Date: 16/04/2022 17:21:27
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sk_trade
-- ----------------------------
DROP TABLE IF EXISTS `sk_trade`;
CREATE TABLE `sk_trade`  (
  `trade_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '订单ID',
  `active_id` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '活动ID',
  `goods_id` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '商品ID',
  `num_total` int(10) UNSIGNED NOT NULL DEFAULT 1 COMMENT '购买的单品数量',
  `price_total` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '订单总金额',
  `time_confirm` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '确认订单时间',
  `time_pay` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '支付时间',
  `time_over` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '过期时间',
  `time_cancel` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '取消时间',
  `goods_rate` decimal(10, 2) NOT NULL DEFAULT 0.00 COMMENT '商品利率',
  `goods_term` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '存期 /月',
  `sys_dateline` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '创建时间',
  `sys_lastmodify` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '最后修改时间',
  `sys_status` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '状态，0 初始状态，1 待支付，2 已支付，3 管理员已确认，4已取消',
  `uid` int(10) UNSIGNED NOT NULL COMMENT '用户ID',
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `active_title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '测试活动A' COMMENT '活动名称',
  `goods_title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '测试商品A' COMMENT '商品名称',
  PRIMARY KEY (`trade_id`) USING BTREE,
  INDEX `uid`(`uid`) USING BTREE,
  INDEX `active_id`(`active_id`) USING BTREE,
  INDEX `goods_id`(`goods_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 35959 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '订单信息表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sk_trade
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
