import React from 'react';
/*import Checkbox from '../../../../../../keystone/fields/components/Checkbox';
import ItemsTableCell from '../../../../../../keystone/fields/components/ItemsTableCell';
import ItemsTableValue from '../../../../../../keystone/fields/components/ItemsTableValue';*/
import Checkbox from '../../components/Checkbox';
import ItemsTableCell from '../../components/ItemsTableCell';
import ItemsTableValue from '../../components/ItemsTableValue';

var VimeoColumn = React.createClass({
	displayName: 'VimeoColumn',
	propTypes: {
		col: React.PropTypes.object,
		data: React.PropTypes.object,
	},
	renderValue () {
		return (
			<ItemsTableValue truncate={false} field={this.props.col.type}>
				<Checkbox readonly checked={this.props.data.fields[this.props.col.path]} />
			</ItemsTableValue>
		);
	},
	render () {
		return (
			<ItemsTableCell>
				{this.renderValue()}
			</ItemsTableCell>
		);
	},
});

module.exports = VimeoColumn;
