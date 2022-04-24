pragma solidity ^0.5.0;

contract DVideo {
    uint256 public videoCount = 0;
    string public name = "DVideo";
    //Create id=>struct mapping

    //1.Model the video
    //Create Struct
    struct Video {
        uint256 id;
        string hash;
        string title;
        address author;
    }

    //Create Event

    constructor() public {}

    function uploadVideo(string memory _videoHash, string memory _title)
        public
    {
        // Make sure the video hash exists
        // Make sure video title exists
        // Make sure uploader address exists
        // Increment video id
        // Add video to the contract
        // Trigger an event
    }
}
