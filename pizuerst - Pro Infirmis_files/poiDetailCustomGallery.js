

function initializeGallery()
{
    var linkItems = document.getElementById('links');

    var galleries = $(".blueimp-gallery-carousel");

    for (var i = 0; i < galleries.length; i++)
    {
        var elementId = '#' + galleries[i].id;
        blueimp.Gallery( 
                           linkItems.getElementsByTagName('a'),
                           {
                               container: elementId,
                               carousel: true,
                               startSlideshow: false,
                               toggleControlsOnSlideClick: false,
                               stretchImages: false,
                               onslide: function (index, slide) {
                                   var text = this.list[index].getAttribute('data-description');
                                   node = $("#slide-description");
                                   node.empty();
                                   if (text) {
                                       node.append(text);
                                   }

                               }
                           }
                           );

    }
}
   
//$(document).on('click', '.slide-content', function (event) {

//        event = event || window.event;
//        var target = event.target || event.srcElement,
//            link = target.src ? target.parentNode : target,
//            options = {
//                index: link,
//                event: event
//            },
//            links = document.getElementById('links');
//        blueimp.Gallery(links, options);
//});
   
//document.getElementsByClassName('slide').onclick = function (event) {
//    event = event || window.event;
//    var target = event.target || event.srcElement,
//        link = target.src ? target.parentNode : target,
//        options = { index: link, event: event },
//        links = this.getElementsByTagName('a');
//    blueimp.Gallery(links, options);
//};