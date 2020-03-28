var playlist={artistName:"Zaid Habash"}
function updatePlaylist(obj, key, value){
   
  obj[key] = value
   return obj
}

updatePlaylist(playlist,"songTitle","Moon Light")

function removeFromPlaylist(obj, key){
   
<<<<<<< HEAD
 return delete obj.key
}

removeFromPlaylist(playlist,"Slowdive")
=======
  delete playlist.artistName
}

removeFromPlaylist(playlist,"artistName")
>>>>>>> 83e6f5ebf5e5eaeb72ca35442b66586ce07c0595

