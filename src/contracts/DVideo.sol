pragma solidity ^0.5.0;

contract DVideo {
    uint256 public videoCount = 0;
    string public name = "DVideo";

    mapping(uint256 => Video) public videos;

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
        videoCount++;
        // Add video to the contract
        videos[videoCount] = Video(videoCount, _videoHash, _title, msg.sender);
        // Trigger an event
    }
}
