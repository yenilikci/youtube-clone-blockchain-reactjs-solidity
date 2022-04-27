import React, {Component} from 'react';

class Main extends Component {

  render() {
    return (
        <div className="container-fluid text-monospace">
            <br></br>
            &nbsp;
            <br></br>
            <div className="row">
                <div className="col-md-10">
                    <div className="embed-responsive embed-responsive-16by9" style={{maxHeight: '768px'}}>
                        <video
                            src={`https://ipfs.infura.io/ipfs/${this.props.currentHash}`}
                            controls
                        >
                        </video>
                    </div>
                    <h3><b><i>{this.props.currentTitle}</i></b></h3>
                </div>
                <div className="col-md-2 border text-center"
                     style={{maxHeight: '768px', maxWidth: '225px'}}>
                    <h5 className="mt-2">
                        <b>Share Video</b>
                    </h5>
                    <form onSubmit={(event) => {
                        event.preventDefault()
                        const title = this.videoTitle.value
                        this.props.uploadVideo(title)
                    }}>
                        &nbsp;
                        <input type='file' accept=".mp4, .mkv .ogg .wmv" onChange={this.props.captureFile}
                               style={{width: '200px'}}/>
                        <div className="form-group mr-sm-2">
                            <input
                                id="videoTitle"
                                type="text"
                                ref={(input) => {
                                    this.videoTitle = input
                                }}
                                className="form-control-sm"
                                placeholder="Title..."
                                required/>
                        </div>
                        <button type="submit" className="btn btn-danger btn-block btn-sm">Upload!</button>
                        &nbsp;
                    </form>
                    {this.props.videos.map((video, key) => {
                        return (
                            <div className="card mb-4 text-center bg-secondary mx-auto" style={{width: '175px'}}
                                 key={key}>
                                <div className="card-title bg-dark">
                                    <small className="text-white"><b>{video.title}</b></small>
                                </div>
                                <div>
                                    <p onClick={() => this.props.changeVideo(video.hash, video.title)}>
                                        <video
                                            src={`https://ipfs.infura.io/ipfs/${video.hash}`}
                                            style={{width: '100px'}}
                                        />
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
  }
}

export default Main;
