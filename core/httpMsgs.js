var settings = require("../settings");

exports.show500 = function(req, resp, err) {
  if (settings.httpMsgsFormat === "HTML") {
  	resp.writeHead(500, "Internal Error Occurred", { "Content-Type": "text/html" });
    resp.write("<html><head></head><body><h1>500: Internal Error<h1><h2>Details</h2><p>" + err + "</p></body></html>");
  }
  else {
  	resp.writeHead(500, "Internal Error Occurred", { "Content-Type": "application/json"});
    resp.write(JSON.stringify({data: "ERROR occurred: " + err}));
  }
  resp.end();
};

exports.show405 = function(req, resp, err) {
  if (settings.httpMsgsFormat === "HTML") {
  	resp.writeHead(405, "Method not supported", { "Content-Type": "text/html" });
    resp.write("<html><head></head><body><h1>405: Method Not Supported</h1></body></html>");
  }
  else {
  	resp.writeHead(405, "Method not supported", { "Content-Type": "application/json" });
    resp.write(JSON.stringify({data: "Method not supported."}));
  }
  resp.end();
};

exports.show404 = function(req, resp, err) {
  if (settings.httpMsgsFormat === "HTML") {
  	resp.writeHead(404, "Resource Not Found", {"Content-Type": "text/html" });
    resp.write("<html><head></head><body><h1>404: Resource Not Found</h1></body></html>");
  }
  else {
  	resp.writeHead(404, "Resource Not Found", {"Content-Type": "application/json"});
    resp.write(JSON.stringify({data: "Resource not found."}));
  }
  resp.end();
};

exports.show403 = function (req, resp, err) {
  if (settings.httpMsgsFormat === "HTML") {
    resp.writeHead(403, "Resource Forbidden", { "Content-Type": "text/html" });
    resp.write("<html><head></head><body><h1>403: Resource Forbidden</h1></body></html>");
  }
  else {
    resp.writeHead(403, "Forbidden", { "Content-Type": "application/json" });
    resp.write(JSON.stringify({data: "Forbidden"}));
  }
  resp.end();
};

exports.show413 = function(req, resp, err) {
  if (settings.httpMsgsFormat === "HTML") {
  	resp.writeHead(413, "Resource Too Large", {"Content-Type": "text/html"});
    resp.write("<html><head></head><body><h1>413: Resource Too Large</h1></body></html>");
  }
  else {
  	resp.writeHead(413, "Resource Too Large", {"Content-Type": "application/json"});
    resp.write(JSON.stringify({data: "Resource not found."}));
  }
  resp.end();
};

exports.send200 = function (req, resp, data) {
  resp.writeHead(200, { "Content-Type": "application/json" });
  resp.end();
};

exports.sendJson = function(req, resp, data) {
	resp.writeHead(200, {'Content-Type': 'application/json'});
	if (data) {
	  resp.write(JSON.stringify(data));	
	}
	resp.end();
};