import React, { Component } from 'react';

export class Movie extends Component {

  
  constructor(props) {
    super(props);
    this.state = { currentCount:3,forecasts: {}, loading: true };
    
    this.somealert = this.somealert.bind(this);
  }

  somealert()
  {
    alert();
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }
  
  static renderForecastsTable(forecasts) {
    return (
      <div>
        <input id="movieSearchWord" placeholder='search movie name' />
        <button onClick={this.somealert}>search</button>
        
        <button className="btn btn-primary" onClick={this.somealert}>Increment</button>
        {forecasts.Search.map(forecast=>
        <div>
            {forecast.Title}
        </div>
        )}
      <table>
        {forecasts.Search.map(forecast=>
        <tbody>
          <tr>
            <th>Title</th>
            <td>{forecast.Title}</td>
          </tr>
          <tr>
            <th>Year</th>
            <td>{forecast.Year}</td>
          </tr>
          <tr>
            <th>Rated</th>
            <td>{forecast.Rated}</td>
          </tr>
          <tr>
            <th>Released</th>
            <td>{forecast.Released}</td>
          </tr>
          <tr>
            <th>Runtime</th>
            <td>{forecast.Runtime}</td>
          </tr>
          <tr>
            <th>Genre</th>
            <td>{forecast.Genre}</td>
          </tr>
          <tr>
            <th>Director</th>
            <td>{forecast.Director}</td>
          </tr>
          <tr>
            <th>Writer</th>
            <td>{forecast.Writer}</td>
          </tr>
          <tr>
            <th>Actors</th>
            <td>{forecast.Actors}</td>
          </tr>
          <tr>
            <th>Plot</th>
            <td>{forecast.Plot}</td>
          </tr>
          <tr>
            <th>Language</th>
            <td>{forecast.Language}</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>{forecast.Country}</td>
          </tr>
          <tr>
            <th>Awards</th>
            <td>{forecast.Awards}</td>
          </tr>
          <tr>
            <th>Poster</th>
            <td>
             <img src={forecast.Poster}></img>
            </td>
          </tr>
          {/* <tr>
            <th>Ratings</th>
            <td>
              <table>
                <tbody>
                {forecast.Ratings.map(Rating=>
                  <tr>                 
                    <th>{Rating.Source}</th>               
                    <td>{Rating.Value}</td>
                  </tr>)}       
                </tbody>       
              </table>
            </td>
          </tr> */}
          <tr>
            <th>Metascore</th>
            <td>{forecast.Metascore}</td>
          </tr>
          <tr>
            <th>imdbRating</th>
            <td>{forecast.imdbRating}</td>
          </tr>
          <tr>
            <th>imdbVotes</th>
            <td>{forecast.imdbVotes}</td>
          </tr>
          <tr>
            <th>imdbID</th>
            <td>{forecast.imdbID}</td>
          </tr>
          <tr>
            <th>Type</th>
            <td>{forecast.Type}</td>
          </tr>
          <tr>
            <th>DVD</th>
            <td>{forecast.DVD}</td>
          </tr>
          <tr>
            <th>Production</th>
            <td>{forecast.Production}</td>
          </tr>
          <tr>
            <th>Website</th>
            <td>{forecast.Website}</td>
          </tr>
          <tr>
            <th>Response</th>
            <td>{forecast.Response}</td>
          </tr>
        </tbody>
        )}
      </table>
      </div>
    );
  }


  //{"Title":"Brother","Year":"2000","Rated":"R","Released":"13 Dec 2000","Runtime":"114 min","Genre":"Crime, Drama, Thriller","Director":"Takeshi Kitano",
  //"Writer":"Takeshi Kitano","Actors":"Takeshi Kitano, Claude Maki, Omar Epps","Plot":"A Japanese gangster is exiled to Los Angeles where his brother lives with a small but respectable multi-racial gang, who he inspires to expand their influence.",
  //"Language":"English, Japanese, Italian, Spanish","Country":"United Kingdom, France, Japan","Awards":"1 win & 2 nominations",
  //"Poster":"https://m.media-amazon.com/images/M/MV5BNzM2NzE4MzEwMl5BMl5BanBnXkFtZTYwMzY0ODc5._V1_SX300.jpg",
  //"Ratings":[{"Source":"Internet Movie Database","Value":"7.1/10"},{"Source":"Rotten Tomatoes","Value":"47%"},{"Source":"Metacritic","Value":"47/100"}],
  //"Metascore":"47","imdbRating":"7.1","imdbVotes":"23,044","imdbID":"tt0222851","Type":"movie","DVD":"02 Jan 2002","BoxOffice":"$450,594","Production":"N/A","Website":"N/A","Response":"True"}
  
  componentDidMount() {
    this.populateMoviesData();
  }

  render () {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Movie.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >Movies forecast</h1>
        
        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  
  async populateMoviesData() {
    const response = await fetch('/movies');
    const data = await response.json();
    this.setState({currentCount:2,forecasts: data, loading: false });
  }
}
