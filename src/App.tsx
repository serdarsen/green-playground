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
} from 'antd';
import { useState } from 'react';

type SizeType = Parameters<typeof Form>[0]['size'];

const App: React.FC = () => {
	const [componentSize, setComponentSize] = useState<SizeType | 'default'>(
		'default'
	);

	const onFormLayoutChange = ({ size }: { size: SizeType }) => {
		setComponentSize(size);
	};

	return (
		<div className="h-screen w-screen flex flex-row justify-center items-center">
			<Form
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 14 }}
				layout="horizontal"
				initialValues={{ size: componentSize }}
				onValuesChange={onFormLayoutChange}
				size={componentSize as SizeType}
				className="w-4/12"
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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore
						</Select.Option>
					</Select>
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
		</div>
	);
};

export default App;
