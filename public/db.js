var chartist = require('./api/chartistData.json');
var bookmark = require('./api/bookmark.json');
var chartjs = require('./api/chartjsData.json');
var googlechart = require('./api/googleChartData.json');
var allproject = require('./api/allProject.json');
var chatmemberapp = require('./api/chatMember.json');
var chatapp = require('./api/chat.chats.json');
var contacts = require('./api/contacts.json');
var task = require('./api/task.json');
var todo = require('./api/todo.json');
var email = require('./api/email.json');
var file = require('./api/files.json');
var products = require('./api/product.json');
var imageLight = require('./api/image-light.json');
var bigImage = require('./api/image-big-light.json');
var masonry = require('./api/masonry.json');
var tableData = require('./api/tableData.json');
var searchAllTabs = require('./api/searchAllTabs.json');
var jobSearch = require('./api/jobSearch.json');
var learning = require('./api/learning.json');
var knowledgebase = require('./api/knowledgebaseDB.json');
var faq = require('./api/Faq.json');

module.exports = function () {
  return {
    chartist,
    bookmark,
    chartjs,
    googlechart,
    allproject,
    chatmemberapp,
    chatapp,
    contacts,
    task,
    todo,
    email,
    file,
    products,
    imageLight,
    bigImage,
    masonry,
    tableData,
    searchAllTabs,
    jobSearch,
    learning,
    knowledgebase,
    faq
  };
};
