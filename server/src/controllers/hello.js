const hello = (req, res) => {
    return res.json({message:"Hello from server Ashish after changing port!"});
}

module.exports = {hello};