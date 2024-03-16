window.onload = function () {
  window.jsPDF = window.jspdf.jsPDF;
  var doc = jsPDF();
// var findTextWidth=function(text,fontSize){
//    var textWidth= doc.getTextDimensions(text,{
//         fontSize:fontSize
//     }).w
//     return textWidth

// }

//   var generatebtn = document.getElementById("generate-btn");
//   generatebtn.onclick = function () {
//     // doc.setFontSize(34)
//     // doc.setFont("sans-serif","italic","bold")
//     // doc.text("codingott",10,20)
//     var pageWidth=doc.internal.pageSize.width
//     var imageWidth=40
//     var imageHeight=40
//     var center=(pageWidth-imageWidth)/2
//     doc.addImage('../images/logo.png','PNG',center,5,imageWidth,imageHeight)
//     var textWidth=findTextWidth("codingott",34)
//     var textLeftMargin=(pageWidth-textWidth)/2
//     doc.setFontSize(34)
//     doc.text("codingott",textLeftMargin,50)


//     var tagline="a wap institute subsdiuary branches for coding education"
//     var taglineSize=17
//     var taglineWidth=findTextWidth(tagline,taglineSize) 
//     var textLeftMargin=(pageWidth-taglineWidth)/2
//     doc.setFontSize(taglineSize)
//     doc.text(tagline,textLeftMargin,60)

//     // doc.text("a wap institute subsdiuary branches for coding education",10,10)
//     doc.save("wap.pdf")
//   };

//   export to pdf

var tablebtn=document.getElementById("table-btn")
tablebtn.onclick=function(){
    doc.autoTable({html:'#report'})
    doc.save("table.pdf")
}
};
