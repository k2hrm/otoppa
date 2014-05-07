#pragma strict

function Start () {

}

function Update () {

}

var sound : AudioClip;
function OnMouseUpAsButton() {
  Debug.Log("pressed!!");
  audio.PlayOneShot(sound);
}