chrome.runtime.onInstalled.addListener(()=>{
    console.log('istalled');
});


chrome.bookmarks.onCreated.addListener(()=>{
    alert('bookmark saved');
})