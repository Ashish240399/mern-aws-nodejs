const hello = (req, res) => {
    return res.json({message:"Hello from server!"});
}

module.exports = {hello};