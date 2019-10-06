import React from 'react';
import ReactDOMServer from 'react-dom/server';

class Hello extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {

    }

    render() {
        return (
            <h1>hello world</h1>
        )
    }
}

`
<body>
    <div id="root" ></div>
    <script>...</script>
</body>
`

console.log(ReactDOMServer.renderToString(<Hello />));