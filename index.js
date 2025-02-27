const root = ReactDOM.createRoot(document.getElementById('root'))
const heading = React.createElement('div', { id: 'parent' },
    [React.createElement('div', { id: 'child1' }, [
        React.createElement('h1', {}, 'I am In H1'),
        React.createElement('h2', {}, 'I am In H2')
    ]), React.createElement('div', { id: 'child2' }, [
        React.createElement('h1', {}, 'I am In H1'),
        React.createElement('h2', {}, 'I am In H2')
    ])])
root.render(heading)