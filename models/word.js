var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mURI = 'mongodb://unifes_mongo/unifes';
mongoose.connect(mURI);

// 接続イベントを利用してログ出力
mongoose.connection.on('connected', function () {
  console.log('mongoose URI locates ' + mURI);
});

var WordSchema = new Schema({
  context: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Word', WordSchema);
