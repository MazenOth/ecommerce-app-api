module.exports = function (req, res, next) {
    // 401 Unauthorized (No webtoken provided)
    // 403 Forbidden (Authorized but not admin)
    if (req.user.roles[0] !== "seller") return res.status(403).send("Access denied.")

    next();
}