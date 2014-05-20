#pragma strict

function Start () {

}

function Update () {

}

var sound : AudioClip;

function OnMouseUpAsButton() {
  audio.PlayOneShot(sound);
}