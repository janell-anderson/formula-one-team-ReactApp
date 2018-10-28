// Response for Posts
function sendOkResp(req, res) {
    res.json({
      status: 'ok',
      data: res.locals.driver || res.locals.driver
    })
  }
  
  function sendErrResp(err, req, res, next) {
    console.log(err);
    res.json({
      status: 'err',
      msg: err.message
    })
  }
  
  module.exports = {
    sendOkResp,
    sendErrResp
  }
  