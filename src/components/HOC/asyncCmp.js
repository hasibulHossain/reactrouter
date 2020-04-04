import React from 'react';

const asyncCom = (importCmp) => {
    return class extends React.Component {
        state = {
            component: null
        }

        componentDidMount() {
            importCmp().then(cmp => {
                this.setState({component: cmp.default})
            })
        }

        render() {
            const Component = this.state.component;

            return this.state.component ? <Component {...this.props} /> : null
            
        }
    }
}

export default asyncCom;