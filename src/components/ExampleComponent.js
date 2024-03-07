import React, { Component } from 'react';
import withPageTimeTracking from './withTimeTracker'; // Импорт HOC

class ExampleComponent extends Component {
  render() {
    return <div>Пример компонента</div>;
  }
}

export default withPageTimeTracking(ExampleComponent); // Применение HOC и экспорт
