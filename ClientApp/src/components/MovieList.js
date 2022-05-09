import React, { Component } from 'react';

export class MovieList extends Component {

  
  constructor(props) {
    super(props);
    this.state = { searchValue:"brother1",currentCount:3,forecasts: {}, loading: true };
    
    this.searchForMovie = this.searchForMovie.bind(this);
    this.searchValueHasChanged = this.searchValueHasChanged.bind(this);
  }

  searchForMovie(el)
  {  
    this.setState({searchValue:el.target.value});
  }
  
  
  async searchValueHasChanged( el){

    const response = await fetch('/movies?search=' + this.state.searchValue );
    const data = await response.json();
    if(!data.Error)
      this.setState({forecasts: data, loading: false });
    else
      this.setState({loading: false });
  }

  static renderForecastsTable(forecasts) {
    return (
      <div>
         {forecasts.Search.map(forecast=>           
          <div class="item">
               <img src={forecast.Poster}></img>           
          </div>
        )}
       <div>
    
    <div id="myCarousel" class="carousel slide" data-ride="carousel" style={{width:"300px"}}> 

      <ol class="carousel-indicators" >        
        {forecasts.Search.map((forecast,index)=>           
          <li data-target="#myCarousel" data-slide-to={index}>forecast.Title</li>
        )}
      </ol>

      <div class="carousel-inner">
      {forecasts.Search.map(forecast=>           
          <div class="item">
               <img src={forecast.Poster}></img>           
          </div>
        )}
       
      </div>
    

      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>

      </div>
    );
  }
  componentDidMount() {
    this.populateMoviesData();
  }


  render () {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : MovieList.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >Movies forecast</h1>
        <input id="movieSearchWord" placeholder='search movie name' value={this.state.searchValue} onChange={this.searchForMovie} />        
        <button className="btn btn-primary" onClick={this.searchValueHasChanged}>Search</button>
        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>
        <p>This component demonstrates fetching data from the server.</p>

        
<div class="container">
  <h2>Carousel Example</h2>
  {contents}
    
</div>
        
      </div>
    );
  }

  
  async populateMoviesData() {
    const response = await fetch('/movies?search=' + this.state.searchValue );
    const data = await response.json();
    if(data.Error)
      this.setState({currentCount:4,forecasts: {Search:[]}, loading: false });
    else
      this.setState({currentCount:2,forecasts: data, loading: false });
  }
}
