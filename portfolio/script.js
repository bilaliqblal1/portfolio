document.getElementById('downloadButton').addEventListener('click', function()
{
    var link = document.createElement('a');
    link.href='MYRESUME.pdf';
    link.download='MYRESUME.pdf';
    link.click();
});