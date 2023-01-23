import {
	Button,
	Cascader,
	DatePicker,
	Form,
	Input,
	InputNumber,
	Radio,
	Select,
	Switch,
	TreeSelect,
	Checkbox,
} from 'antd';
import { useState } from 'react';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

type SizeType = Parameters<typeof Form>[0]['size'];

const FormView: React.FC = () => {
	const [componentSize, setComponentSize] = useState<SizeType | 'default'>(
		'default'
	);
	const [checkboxGroupValue, setCheckboxGroupValue] = useState<
		CheckboxValueType[]
	>(['A', 'B']);

	const onChangeFormLayout = ({ size }: { size: SizeType }) => {
		setComponentSize(size);
	};

	const checkboxGroupItems = [
		{
			label:
				'Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
			value: 'A',
		},
		{
			label:
				'Viverra aliquet eget sit amet tellus cras adipiscing. Volutpat odio facilisis mauris sit amet massa vitae.',
			value: 'B',
		},
		{
			label:
				'Et odio pellentesque diam volutpat. Sed egestas egestas fringilla phasellus.',
			value: 'C',
		},
	];

	return (
		<Form
			labelCol={{ span: 4 }}
			wrapperCol={{ span: 14 }}
			layout="horizontal"
			initialValues={{ size: componentSize }}
			onValuesChange={onChangeFormLayout}
			size={componentSize as SizeType}
			className="w-6/12"
		>
			<Form.Item label="Form Size" name="size">
				<Radio.Group>
					<Radio.Button value="small">Small</Radio.Button>
					<Radio.Button value="default">Default</Radio.Button>
					<Radio.Button value="large">Large</Radio.Button>
				</Radio.Group>
			</Form.Item>
			<Form.Item label="Input">
				<Input />
			</Form.Item>
			<Form.Item label="Select">
				<Select>
					<Select.Option value="demo">
						{checkboxGroupItems[0].label}
					</Select.Option>
				</Select>
			</Form.Item>
			<Form.Item label="Custom Select">
				<Select
					value={{
						key: 'labelOne',
						label: (
							<div className="flex flex-row flex-nowrap gap-1">
								<p className="truncate">{checkboxGroupItems[0].label}</p>
								<p>+1</p>
							</div>
						),
					}}
					dropdownRender={() => (
						<Checkbox.Group
							onChange={setCheckboxGroupValue}
							className="w-full"
							value={checkboxGroupValue}
						>
							{checkboxGroupItems.map(({ label, value }) => (
								<div
									className="flex flex-row flex-nowrap gap-1 px-1"
									key={value}
								>
									<Checkbox value={value} />
									<p className="truncate">{label}</p>
								</div>
							))}
						</Checkbox.Group>
					)}
				/>
			</Form.Item>
			<Form.Item label="TreeSelect">
				<TreeSelect
					treeData={[
						{
							title: 'Light',
							value: 'light',
							children: [{ title: 'Bamboo', value: 'bamboo' }],
						},
					]}
				/>
			</Form.Item>
			<Form.Item label="Cascader">
				<Cascader
					options={[
						{
							value: 'zhejiang',
							label: 'Zhejiang',
							children: [
								{
									value: 'hangzhou',
									label: 'Hangzhou',
								},
							],
						},
					]}
				/>
			</Form.Item>
			<Form.Item label="DatePicker">
				<DatePicker />
			</Form.Item>
			<Form.Item label="InputNumber">
				<InputNumber />
			</Form.Item>
			<Form.Item label="Switch" valuePropName="checked">
				<Switch />
			</Form.Item>
			<Form.Item label="Button">
				<Button>Button</Button>
			</Form.Item>
		</Form>
	);
};

export default FormView;
