function volume_sphere() {
    //Write your code here
    const radius = document.getElementById('radius');
    const rad = Number(radius.value);
    const volume = (4/3) * 22/7 * rad*rad*rad;
    const vol = document.getElementById("volume");
    vol.value = volume;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
