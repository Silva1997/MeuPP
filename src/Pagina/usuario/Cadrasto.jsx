import React, { useState } from 'react';
import { Upload, Button, Form, Input, InputNumber, Select, DatePicker } from 'antd';
import { PlusOneOutlined } from '@mui/icons-material';

const { RangePicker } = DatePicker;

const formItemLayout = {
    labelCol: {
        xs: { span: 34 },
        sm: { span: 12 },
    },
    wrapperCol: {
        xs: { span: 34 },
        sm: { span: 24 },
    },
};

const App1 = () => {

    const [showForm, setShowForm] = useState(false);
    const [Formulario] = Form.useForm();
    const [selectedFile, setSelectedFile] = useState(null);

    const dados = {
        Nome: Form.useWatch('Nome', Formulario),
        Apelido: Form.useWatch('Apelido', Formulario),
        Pms: Form.useWatch('Pms', Formulario),
        Imagem: Form.useWatch('foto', Formulario),
        Data: Form.useWatch('data', Formulario),
        Bi: Form.useWatch('InputNumber', Formulario),
        selecionar: Form.useWatch('Select', Formulario),
        Periodo: Form.useWatch('RangePicker', Formulario),
    };
    const dateFormat = 'DD/MM/YYYY';

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const normFile = (e) => {
        setSelectedFile(e.fileList[0]);
        return e.fileList;
    };
    // const normFile = (e) => {
    //     if (Array.isArray(e)) {
    //         return e;
    //     }
    //     return e?.fileList;
    // };
    function handleSubmit() {
        const formattedDate = dados.Data ? dados.Data.format(dateFormat) : null;
        console.log('Dados', { ...dados, Data: formattedDate });
    }
    const handleClear = () => {
        Formulario.resetFields(); // Limpa todos os campos do formulário
        setSelectedFile(null); // Reseta o arquivo selecionado
    };

    return (
        <>
          <div style={{paddingTop:'2rem'}}>
          <div style={{margin:'3rem', boder:' 1px 1px solid #000', padding:'2rem'}}>
          <Button onClick={toggleForm}>{showForm ? 'Esconder formulário' : 'Mostrar formulário'}</Button>
            {showForm &&
                (
                    <Form
                        form={Formulario}
                        onFinish={handleSubmit}
                        {...formItemLayout}
                        variant="filled"
                        className='Formulario'
                        autoComplete="off"
                    >
                        <div>
                            <Form.Item name='foto' label="Carregar" valuePropName="fileList" getValueFromEvent={normFile}  >
                                <Upload action="/upload.do" listType="picture-card" type='file' style={{height:'7vh'}}   >
                                    <button style={{ border: 0, background: 'none' }} type="button" >
                                        <PlusOneOutlined color="#000" style={{ color: '#000' }} />
                                        <div style={{ marginTop: 8, color: '#000' }}>{selectedFile ? selectedFile.name : 'Carregamento'}</div>

                                    </button>
                                </Upload>
                            </Form.Item>


                            <Form.Item label="Nome" name="Nome" rules={[{ required: true, message: 'Please input!' }]}>
                                <Input type='text' id='InputEntrada' />
                            </Form.Item>

                            <Form.Item label="Apelido" name="Apelido" rules={[{ required: true, message: 'Please input!' }]}>
                                <Input style={{ width: 'auto' }} type='text' id='InputEntrada3' />
                            </Form.Item>
                        </div>

                        <div>
                            <Form.Item label="Pms" name="Pms" rules={[{ required: true, message: 'Digite o Pms!' }]}>
                                <InputNumber type='number' maxLength={6} style={{ width: 'auto' }}  id='InputEntrada' />
                            </Form.Item>

                            <Form.Item
                                label="Numero do BI"
                                name="InputNumber"
                                rules={[{ required: true, message: 'Digite o numero do BI!' }]}
                            >
                                <Input type='text' maxLength={14}  id='InputEntrada' />
                            </Form.Item>

                            <Form.Item
                                label="Observação"
                                name="TextArea"
                                rules={[{ required: true, message: 'Escreve o motivo!' }]}
                            >
                                <Input.TextArea   />
                            </Form.Item>
                        </div>

                        <div>
                            <Form.Item label="Selecionar" name="Select" rules={[{ required: true, message: 'Please input!' }]}>
                                <Select  id='InputEntrada2'>
                                    <Select.Option value="Estudante">Estudante</Select.Option>
                                    <Select.Option value="Visiante">Visitante</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="Data de validade" name="data" rules={[{ required: true, message: 'Please input!' }]}>
                                <DatePicker format={dateFormat}  id='InputEntrada3'  />
                            </Form.Item>

                            <Form.Item label="Data" name="RangePicker" rules={[{ required: true, message: 'Please input!' }]}>
                                <RangePicker format={dateFormat}   />
                            </Form.Item>
                        </div>
                        <Form.Item wrapperRow={{ offset: 2, span: 4 }}  style={{display:"flex",width:'100%' , justifyContent:'center',gap:'2rem' , flexDirection:'row'}}>
                            <Button type="primary" htmlType="submit" style={{marginRight:'12px'}} >
                                Cadastrar
                            </Button>
                            <Button type="default" htmlType="reset" onClick={handleClear}>
                                Limpar
                            </Button>

                        </Form.Item>
                    </Form>
                )}
          </div>
          </div>
        
       
        </>
    );
};

export default App1;
