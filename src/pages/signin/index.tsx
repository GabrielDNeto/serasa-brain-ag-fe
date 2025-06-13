import Input from "@/components/atoms/Forms/Input";
import { StyledSection } from "./styles";
import FormLabel from "@/components/atoms/Forms/Label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputMessage from "@/components/atoms/Forms/InputMessage";
import Button from "@/components/atoms/Button";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/services/auth";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router";
import { APP_ROUTES } from "@/config/routes/constants";

const signinSchema = z.object({
  username: z.string().min(1, "Campo obrigatório"),
  password: z.string().min(1, "Campo obrigatório"),
});

type SigninSchemaType = z.infer<typeof signinSchema>;

export default function Signin() {
  const { handleAuthenticate } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SigninSchemaType>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const signinMutation = useMutation({
    mutationFn: signIn,
    onSuccess: (response) => {
      handleAuthenticate(response.data.access_token);
      navigate(APP_ROUTES.private.dashboard);
    },
  });

  const submit = (data: SigninSchemaType) => {
    signinMutation.mutate(data);
  };

  return (
    <StyledSection>
      <div>
        <h1>Acessar Plataforma</h1>

        <form onSubmit={handleSubmit(submit)}>
          <div>
            <FormLabel htmlFor="username">Usuário</FormLabel>
            <Input
              id="username"
              placeholder="jhondoe"
              hasError={!!errors.username}
              {...register("username", { required: true })}
            />
            {errors.username && (
              <InputMessage>{errors.username.message}</InputMessage>
            )}
          </div>

          <div>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              id="password"
              variant="password"
              hasError={!!errors.password}
              {...register("password", { required: true })}
            />
            {errors.password && (
              <InputMessage>{errors.password.message}</InputMessage>
            )}
          </div>

          <Button>Acessar</Button>
        </form>
      </div>
    </StyledSection>
  );
}
