var express = require("express");
var router = express.Router();
const PostController = require("../controllers/post");
const handleErrorAsync = require("../services/handleErrorAsync");

// 取得單筆貼文 by Id
router.get("/post/:id", handleErrorAsync(PostController.getOneById));

// 新增貼文
router.post("/post/", handleErrorAsync(PostController.createOne));

// 刪除單筆貼文 by Id
router.delete("/post/:id", handleErrorAsync(PostController.deleteOneById));

// 更新貼文 by Id
router.patch("/post/:id", handleErrorAsync(PostController.updateOneById));

// 取得所有貼文
router.get("/posts/", handleErrorAsync(PostController.getAll));

// 刪除所有貼文
router.delete("/posts/", handleErrorAsync(PostController.deleteAll));

module.exports = router;
