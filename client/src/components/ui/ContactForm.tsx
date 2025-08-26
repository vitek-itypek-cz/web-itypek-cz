import { FC, FormEvent, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactForm: FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    gdprConsent: false,
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
    gdprConsent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prev => ({ ...prev, [name]: newValue }));
    
    // Clear error for this field if it was previously marked as error
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const validateForm = () => {
    const errors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "" || !formData.email.includes("@"),
      message: formData.message.trim() === "",
      gdprConsent: !formData.gdprConsent,
    };
    
    setFormErrors(errors);
    return !Object.values(errors).some(Boolean);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Chyba",
        description: "Prosím vyplňte všechna povinná pole správně.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      const response = await fetch("https://formspree.io/f/xwpbeebw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          gdprConsent: formData.gdprConsent,
        }),
      });

      if (response.ok) {
        toast({
          title: "Zpráva odeslána",
          description: "Děkujeme za zprávu. Budeme vás kontaktovat co nejdříve.",
          duration: 5000,
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          gdprConsent: false,
        });
      } else {
        throw new Error("Chyba při odesílání");
      }
    } catch (error) {
      toast({
        title: "Chyba při odesílání",
        description: "Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.",
        variant: "destructive",
      });
    }
  };

  return (
    <form id="contactForm" className="bg-accent p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold mb-6 font-heading">Napište nám</h3>
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Jméno *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border ${
            formErrors.name ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
        />
        {formErrors.name && (
          <p className="text-red-500 text-sm mt-1">Prosím vyplňte jméno</p>
        )}
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          E-mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border ${
            formErrors.email ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
        />
        {formErrors.email && (
          <p className="text-red-500 text-sm mt-1">Prosím vyplňte platný e-mail</p>
        )}
      </div>
      
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Zpráva *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-2 border ${
            formErrors.message ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
        ></textarea>
        {formErrors.message && (
          <p className="text-red-500 text-sm mt-1">Prosím napište zprávu</p>
        )}
      </div>
      
      <div className="mb-6">
        <div className="flex items-start">
          <input
            type="checkbox"
            id="gdprConsent"
            name="gdprConsent"
            checked={formData.gdprConsent}
            onChange={handleChange}
            className={`mr-3 mt-1 h-4 w-4 text-primary border-2 ${
              formErrors.gdprConsent ? "border-red-500" : "border-gray-300"
            } rounded focus:ring-primary focus:ring-2`}
          />
          <label htmlFor="gdprConsent" className="text-gray-700 text-sm leading-5">
            Souhlasím se{' '}
            <a
              href="/cesta-k-vasim-zasadam-gdpr"
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline hover:text-primary transition-colors" 
            >
              zpracováním osobních údajů
            </a>{' '}
            *
          </label>
        </div>
        {formErrors.gdprConsent && (
          <p className="text-red-500 text-sm mt-1">Souhlas se zpracováním osobních údajů je povinný</p>
        )}
      </div>
      
      <button
        type="submit"
        className="w-full bg-primary hover:bg-[#27BCE1] text-white font-medium py-3 px-4 rounded-md transition-colors duration-300"
      >
        Odeslat zprávu
      </button>
    </form>
  );
};

export default ContactForm;
