const express = require("express");
const route = express.Router()
const BookController = require("../controllers/BookController");
const router = require("./AuthRouter");

/**
 *  @route  /api/books
 * @desc  /Route for Books
 * @access Public
 */
router.get("/", BookController.getBookList)

/**
 *  @route  /api/books/details/:id
 * @desc  /Route for Books details
 * @access Public
 */
router.get("/details/:id", BookController.getBookDetails)

module.exports = router