import { APP_ROUTES } from "@/config/routes/constants";
import { useAuth } from "@/hooks/useAuth";
import { signIn } from "@/services/auth";
import { getErrorMessage } from "@/utils/get-error-message";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, message } from "antd";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import { StyledSection } from "./styles";

type SigninSchemaType = {
  username: string;
  password: string;
};

export default function Signin() {
  const { handleAuthenticate } = useAuth();

  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate();

  const signinMutation = useMutation({
    mutationFn: signIn,
    onSuccess: (response) => {
      handleAuthenticate(response.data.access_token);
      navigate(APP_ROUTES.private.dashboard);
    },
    onError: (error) => {
      messageApi.open({
        type: "error",
        content: getErrorMessage(error),
      });
    },
  });

  const onSubmit = (data: SigninSchemaType) => {
    signinMutation.mutate(data);
  };

  return (
    <>
      <Helmet>
        <title>Brain Ag | Entrar</title>
        <meta name="description" content="Acesse a plataforma" />
      </Helmet>
      <StyledSection>
        {contextHolder}

        <div>
          <h1>Acessar Plataforma</h1>

          <Form
            name="basic"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            style={{ maxWidth: 600 }}
            onFinish={onSubmit}
          >
            <Form.Item<string>
              label="Usuário"
              name="username"
              rules={[{ required: true, message: "Campo obrigatório!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item<string>
              label="Senha"
              name="password"
              rules={[{ required: true, message: "Campo obrigatório!" }]}
            >
              <Input.Password placeholder="senha" />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Entrar
            </Button>
          </Form>
        </div>
      </StyledSection>
    </>
  );
}
