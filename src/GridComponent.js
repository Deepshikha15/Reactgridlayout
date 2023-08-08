import React from 'react';
class GridComponent extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = { items: [],prevRatio: 0.0};
        
    }


    componentDidMount() {
        this.createObserver();
      }
    
      createObserver = () => {
        let observer;
        
        let options = {
          root: null,
          rootMargin: "0px",
          threshold: 1
        };
        
        observer = new IntersectionObserver(this.handleIntersect, options);
        observer.observe(this.$box);
    
      };
    
      handleIntersect = (entries, observer) => {
        entries.map((entry) => {
           
          if (entry.intersectionRatio > this.state.prevRatio) {
    
           const children = this.$box.querySelectorAll(".btn").length;
           this.$box.style.backgroundColor = `white`;
            console.log( children+ "was called ");
          } else {
           this.$box.style.backgroundColor = `blue`;
           const children = this.$box.querySelectorAll(".btn").length;
          
           console.log(children+ " was called ");
           
          }
         
          this.setState({ prevRatio: entry.intersectionRatio });
      
        });
    
      };


	
    render() {
        let columns=[];
        this.props.items.forEach((item,idx) => {
            columns.push(
                <div className="col-md py-3" key={idx}>
    			    <div className="card card-body" style={{backgroundColor:"lightblue"}}>
    				<a className="btn" >{item.name}</a>
    				</div>
    			</div>
    		)
            
        if ((idx+1)%this.props.col===0) {columns.push(<div className="w-100" key={null}></div>)}
        console.log("item ==>",item.name)
    })

		return (
          <div ref={(box) => { this.$box = box; }} className="row">
              {columns}
          </div>
		)            
    }
}
export default GridComponent;