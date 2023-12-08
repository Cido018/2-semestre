﻿// <auto-generated />
using EX02.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace EX02.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.11");

            modelBuilder.Entity("EX02.Models.Continente", b =>
                {
                    b.Property<int>("continenteID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("continenteID");

                    b.ToTable("Continentes");
                });

            modelBuilder.Entity("EX02.Models.Pais", b =>
                {
                    b.Property<int>("IdPaises")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Capital")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<decimal>("Populacao")
                        .HasColumnType("TEXT");

                    b.Property<int>("continenteID")
                        .HasColumnType("INTEGER");

                    b.HasKey("IdPaises");

                    b.HasIndex("continenteID");

                    b.ToTable("Paises");
                });

            modelBuilder.Entity("EX02.Models.Pais", b =>
                {
                    b.HasOne("EX02.Models.Continente", "Continente")
                        .WithMany("Paises")
                        .HasForeignKey("continenteID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Continente");
                });

            modelBuilder.Entity("EX02.Models.Continente", b =>
                {
                    b.Navigation("Paises");
                });
#pragma warning restore 612, 618
        }
    }
}
