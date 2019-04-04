import React from 'react';
import { TreeList, Editing, Column, RequiredRule, Lookup } from 'devextreme-react/tree-list';
import { employees } from './data.js';

const expandedRowKeys = [1, 2, 3, 4, 5];

const headDataSource = {
  store: employees,
  sort: 'Full_Name'
};

class App extends React.Component {
  render() {
    return (
      <div id={'tree-list-demo'}>
        <TreeList
          id={'employees'}
          dataSource={employees}
          showRowLines={true}
          showBorders={true}
          columnAutoWidth={true}
          defaultExpandedRowKeys={expandedRowKeys}
          keyExpr={'ID'}
          parentIdExpr={'Head_ID'}
          onCellPrepared={this.onCellPrepared}
          onEditorPreparing={this.onEditorPreparing}
          onInitNewRow={this.onInitNewRow}
        >
          <Editing
            allowUpdating={true}
            allowDeleting={true}
            allowAdding={true}
            mode={'row'} />
          <Column
            dataField={'Full_Name'}>
            <RequiredRule />
          </Column>
          <Column
            dataField={'Head_ID'}
            caption={'Head'}>
            <Lookup
              dataSource={headDataSource}
              valueExpr={'ID'}
              displayExpr={'Full_Name'} />
            <RequiredRule />
          </Column>
          <Column
            dataField={'Title'}
            caption={'Position'}>
            <RequiredRule />
          </Column>
          <Column
            width={120}
            dataField={'Hire_Date'}
            dataType={'date'}>
            <RequiredRule />
          </Column>
        </TreeList>
      </div>
    );
  }
  onCellPrepared(e) {
    if(e.column.command === 'edit') {
      let addLink = e.cellElement.querySelector('.dx-link-add');

      if(addLink) {
        addLink.remove();
      }
    }
  }
  onEditorPreparing(e) {
    if(e.dataField === 'Head_ID' && e.row.data.ID === 1) {
      e.cancel = true;
    }
  }
  onInitNewRow(e) {
    e.data.Head_ID = 1;
  }
}

export default App;
