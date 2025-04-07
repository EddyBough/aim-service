"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Upload, X, Check, Info } from "lucide-react";
import Image from "next/image";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    hasBorne: null as boolean | null,
  });

  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBorneSelection = (hasBorne: boolean) => {
    setFormData((prev) => ({ ...prev, hasBorne }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);

      // Create preview URLs
      const newPreviewUrls = newFiles.map((file) => URL.createObjectURL(file));

      setUploadedImages((prev) => [...prev, ...newFiles]);
      setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
    }
  };

  const removeImage = (index: number) => {
    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(previewUrls[index]);

    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, including the images
    console.log("Form data:", formData);
    console.log("Uploaded images:", uploadedImages);

    // In a real implementation, you would use FormData to send the files
    // const formDataToSend = new FormData()
    // formDataToSend.append("name", formData.name)
    // formDataToSend.append("email", formData.email)
    // formDataToSend.append("phone", formData.phone)
    // formDataToSend.append("message", formData.message)
    // formDataToSend.append("hasBorne", String(formData.hasBorne))
    // uploadedImages.forEach((file, index) => {
    //   formDataToSend.append(`image-${index}`, file)
    // })

    // fetch("/api/contact", {
    //   method: "POST",
    //   body: formDataToSend,
    // })

    // Reset form after submission
    alert("Votre message a été envoyé avec succès !");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <Label htmlFor="name" className="block text-gray-700 mb-2">
          Nom
        </Label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="email" className="block text-gray-700 mb-2">
          Email
        </Label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="phone" className="block text-gray-700 mb-2">
          Téléphone
        </Label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
      </div>

      {/* Borne de recharge existante */}
      <div className="mb-6">
        <Label className="block text-gray-700 mb-2">
          Disposez-vous déjà d&apos;une borne de recharge ?
        </Label>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => handleBorneSelection(true)}
            className={`flex items-center px-4 py-2 rounded border ${
              formData.hasBorne === true
                ? "bg-green-100 border-green-500 text-green-700"
                : "border-gray-300 text-gray-700"
            }`}
          >
            <Check
              className={`h-5 w-5 mr-2 ${
                formData.hasBorne === true ? "text-green-500" : "text-gray-400"
              }`}
            />
            Oui
          </button>
          <button
            type="button"
            onClick={() => handleBorneSelection(false)}
            className={`flex items-center px-4 py-2 rounded border ${
              formData.hasBorne === false
                ? "bg-blue-100 border-blue-500 text-blue-700"
                : "border-gray-300 text-gray-700"
            }`}
          >
            <X
              className={`h-5 w-5 mr-2 ${
                formData.hasBorne === false ? "text-blue-500" : "text-gray-400"
              }`}
            />
            Non
          </button>
        </div>
      </div>

      {/* Upload d'images */}
      <div className="mb-6">
        <Label className="block text-gray-700 mb-2">
          Photos de votre installation électrique (optionnel)
        </Label>
        <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Info className="h-5 w-5 text-blue-500 mr-2" />
            <p className="text-sm text-gray-600">
              Envoyez des photos de votre tableau électrique et de
              l&apos;emplacement prévu pour la borne.
            </p>
          </div>

          <label className="flex flex-col items-center justify-center w-full h-32 bg-white border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-2 text-gray-500" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Cliquez pour ajouter</span> ou
                glissez-déposez
              </p>
              <p className="text-xs text-gray-500">
                PNG, JPG ou JPEG (max. 5 Mo par image)
              </p>
            </div>
            <input
              type="file"
              className="hidden"
              accept="image/png, image/jpeg, image/jpg"
              multiple
              onChange={handleImageUpload}
            />
          </label>

          {/* Image previews */}
          {previewUrls.length > 0 && (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {previewUrls.map((url, index) => (
                <div key={index} className="relative group">
                  <div className="relative h-24 w-full rounded overflow-hidden border border-gray-200">
                    <Image
                      src={url || "/placeholder.svg"}
                      alt={`Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mb-6">
        <Label htmlFor="message" className="block text-gray-700 mb-2">
          Message
        </Label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          className="w-full p-3 border border-gray-300 rounded"
          placeholder="Décrivez votre projet ou vos besoins..."
          required
        ></textarea>
      </div>

      <Button
        type="submit"
        className="w-full bg-black hover:bg-gray-800 text-[#FFD700] font-bold py-3"
      >
        Envoyer
      </Button>
    </form>
  );
}
