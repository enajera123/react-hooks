"use client"

import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Mail, Lock, Info, AlertCircle, Eye } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useAuthStore } from "@/store/useAuthStore"
import { LoginSchema } from "@/schemas/LoginSchema"
import { formVariants, itemVariants } from "@/lib/utils/motionParams"
import { useNavigate } from "react-router-dom"

export function LoginForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const { login } = useAuthStore()
    const handleSubmit = async (values: { email: string; password: string }) => {
        setIsLoading(true)
        try {
            if (await login(values.email, values.password))
                navigate("/dashboard")
        } catch (error) {
            toast.error("Login error", {
                description: "Incorrect credentials. Please try again.",
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <motion.div
            className="rounded-lg border bg-card text-card-foreground shadow-sm p-6"
            initial="hidden"
            animate="visible"
            variants={formVariants}
        >
            <motion.div className="flex items-center justify-center mb-6" variants={itemVariants}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <img
                        src="/logo.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="mx-auto"
                    />
                </motion.div>
            </motion.div>
            <Formik initialValues={{ email: "", password: "" }} validationSchema={LoginSchema} onSubmit={handleSubmit}>
                <Form className="space-y-4">
                    <motion.div className="space-y-1" variants={itemVariants}>
                        <div className="flex items-center gap-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                Email
                            </label>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Enter the email you registered with</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <div className="relative">
                            <Field name="email">
                                {({ field }: { field: any }) => (
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input id="email" placeholder="correo@ejemplo.com" className="pl-10" {...field} />
                                    </div>
                                )}
                            </Field>
                            <ErrorMessage name="email">
                                {(msg) => (
                                    <div className="flex items-center gap-1 mt-1 text-sm font-medium text-destructive">
                                        <AlertCircle className="h-4 w-4" />
                                        <p>{msg}</p>
                                    </div>
                                )}
                            </ErrorMessage>
                        </div>
                    </motion.div>

                    <motion.div className="space-y-1" variants={itemVariants}>
                        <div className="flex items-center gap-2">
                            <label htmlFor="password" className="text-sm font-medium">
                                Password
                            </label>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Minimum 6 characters</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <div className="relative">
                            <Field name="password">
                                {({ field }: { field: React.InputHTMLAttributes<HTMLInputElement> }) => {
                                    return (
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="******"
                                                className="pl-10 pr-10"
                                                {...field}
                                            />
                                            <button
                                                type="button"
                                                className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                                tabIndex={-1}
                                                onClick={() => setShowPassword((prev) => !prev)}
                                            >
                                                <Eye className={showPassword ? "h-4 w-4 text-sky-600" : "h-4 w-4"} />
                                            </button>
                                        </div>
                                    )
                                }}
                            </Field>
                            <ErrorMessage name="password">
                                {(msg) => (
                                    <div className="flex items-center gap-1 mt-1 text-sm font-medium text-destructive">
                                        <AlertCircle className="h-4 w-4" />
                                        <p>{msg}</p>
                                    </div>
                                )}
                            </ErrorMessage>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Button
                            type="submit"
                            className="w-full bg-sky-600 hover:bg-sky-700"
                            disabled={isLoading}
                        >
                            {isLoading ? "Logging in..." : "Log in"}
                        </Button>
                    </motion.div>
                    <motion.div className="text-end text-sm" variants={itemVariants}>
                        <p>

                            <a href="/forgotPassword" className="text-sky-600 hover:text-sky-700">
                                Forgot your password?
                            </a>
                        </p>
                    </motion.div>
                    <motion.div className="text-center text-sm" variants={itemVariants}>
                        <p>
                            Don't have an account?{" "}
                            <a href="/register" className="text-sky-600 hover:text-sky-700">
                                Register here
                            </a>
                        </p>
                    </motion.div>
                </Form>
            </Formik>
        </motion.div>
    )
}