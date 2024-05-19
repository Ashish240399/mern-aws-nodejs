const hello = (req, res) => {
    return res.json({message:"Hello from server Ashish!"});
}

module.exports = {hello};