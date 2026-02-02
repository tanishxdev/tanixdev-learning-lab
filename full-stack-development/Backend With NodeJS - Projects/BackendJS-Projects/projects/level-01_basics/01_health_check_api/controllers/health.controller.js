// Health check controller
// This function decides what response to send

const healthCheck = (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Server is healthy",
  });
};

module.exports = {
  healthCheck,
};
