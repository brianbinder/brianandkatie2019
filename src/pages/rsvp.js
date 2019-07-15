import React from "react"
import Layout from "../components/layout"

const iFrameStyle = {
  background: 'transparent',
  border: '1px solid #ccc'
};

function calculateFormHeight() {
  if (window && window.innerHeight) {
    return Math.min(window.innerHeight - 150, 1500);
  }
  return 800;
}

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formHeight: 800
    };
  }

  componentDidMount() {
    this.setState({
      formHeight: calculateFormHeight()
    })
  }
  
  render() {
    return (
      <Layout>
        <iframe
          className="airtable-embed"
          title="Reservation Questionnaire"
          src="https://airtable.com/embed/shrldvaRc1X3O3uxF?backgroundColor=green"
          width="100%"
          height={this.state.formHeight}
          style={iFrameStyle}>
        </iframe>
      </Layout>
    )
  }
}

export default IndexPage
